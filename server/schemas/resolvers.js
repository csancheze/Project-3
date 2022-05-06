const { AuthenticationError } = require('apollo-server-express');
//const { update } = require('../models/User');
const { signToken } = require('../utils/auth');
const { User, PetSitter } = require('../models');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            console.log("context user:" + context.user);
            throw new AuthenticationError('Please, log in!');
        },
        professional: async (parent, args, context) => {
            if (context.petSitter) {
                const userData = await PetSitter.findOne({ _id: context.petSitter._id })
                    .select('-__v -password')
                return userData;
            }
            console.log("context user:" + context.petSitter);
            throw new AuthenticationError('Please, log in!');
        },
        petSitter: async (parent, args, context) => {
            return await PetSitter.findById(args.petSitter._id)
                .populate('services')
                .populate('sizes')
                .populate('socialReady')
                .populate('healthReady')
        },
        petSitters: async (parent, args, context) => {
            const petSitters = await PetSitter.
                find({
                    availability: true,
                    services: { $in: args.services },
                    sizes: { $in: args.user.pet.size },
                    healthReady: { $in: args.user.pet.health },
                    socialReady: { $in: args.user.pet.sociability }
                })
                .populate('services')
                .sort({ price: -1 })

            const filteredPetSitters = []

            //check for each Petsitter, for each daysOff if it is between the event dates, if none of the daysoff are between, then push the petSitter to the filtered array

            for (let i = 0; i < petSitters.length; i++) {
                let includesDaysOff = false
                for (let j = 0; j < petSitters[i].daysOff.length; j++) {
                    if (args.daysOfEvent.start < petSitters[i].daysOff[j].start > args.daysOfEvent.end || args.daysOfEvent.start < petSitters[i].daysOff[j].end > args.daysOfEvent.end) {
                        includesDaysOff = true
                    }
                }
                if (includesDaysOff === false) {
                    filteredPetSitters.push(petSitters[i])
                }
            }

            return filteredPetSitters
        },

        user: async (parent, args, context) => { }

    },

    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
        },


        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Credentials are not valid')
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Credentials are not valid')
            }
            const token = signToken(user);
            return { token, user };
        },
    }

};


module.exports = resolvers;
