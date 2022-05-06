const { AuthenticationError } = require('apollo-server-express');
//const { update } = require('../models/User');
const { signToken } = require('../utils/auth');
const { User, PetSitter, Health, Size, TypeOfService, Sociability, Status, RangeOfDays, Pet } = require('../models');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('pets')
                    .populate([{
                        path: 'pets',
                        populate: {
                            path: 'health',
                            model: 'Health'
                        },
                        populate: {
                            path: 'size',
                            model: 'Size'
                        },
                        populate: {
                            path: 'sociability',
                            model: 'Sociability'
                        }
                    }
                    ])
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

        sizes: async (parent, args, context) => {
            const sizes = await Size.find({})
            return sizes
        },

        healths: async (parent, args, context) => {
            const healths= await Health.find({})
            return healths
        },

        services: async (parent, args, context) => {
            const services = await TypeOfService.find({})
            return services
        },

        sociabilities: async (parent, args, context) => {
            const sociabilities = await sociabilities.find({})
            return sociabilities
        },
        
        


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

        addHealth: async(parent, args) => {
            const health = await Health.create(args);
            return health;
        },

        addSize: async(parent, args) => {
            const size= await Size.create(args);
            return size;
        },
        addService: async(parent, args) => {
            const service = await TypeOfService.create(args);
            return service;
        },
        addSociability: async(parent, args) => {
            const sociability = await Sociability.create(args);
            return sociability;
        },
        addStatus: async(parent, args) => {
            const status = await Status.create(args);
            return status;
        },
        addHealth: async(parent, args) => {
            const health = await Health.create(args);
            return health;
        },
        addDaysOff: async(parent, args, context) => {
            const newDaysOff = await RangeOfDays.create(args)
            const petSitter = await PetSitter.findById({_id: context.petSitter._id})
            petSitter.daysOff.push(newDaysOff)
            return petSitter
        },
        addPet: async(parent, args, context) => {
            const newPet = await Pet.create(args)
            const user = await User.findById({_id: context.user._id})
            user.pets.push(newPet)
        },

        addPetSitter: async(parent, args) => {
                const user = await PetSitter.create(args);
                const token = signToken(user);
          
                return { token, user };
              },
        },

        
    }

};


module.exports = resolvers;
