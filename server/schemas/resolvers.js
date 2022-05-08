const { AuthenticationError } = require('apollo-server-express');
//const { update } = require('../models/User');
const { signToken } = require('../utils/auth');
const { User, PetSitter, PetOwner } = require('../models');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (!context.user) {
                console.log("El context es: " + context.user)
                throw new AuthenticationError('Please, log in!');
            }
            const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password');
            switch (userData.role) {
                case "PetSitter":
                    const PetSitterData = await PetSitter.findOne({ userId: context.user._id });
                    return { user: userData, petSitter: PetSitterData };
                case "PetOwner":
                    const PetOwnerData = await PetOwner.findOne({ userId: context.user._id });
                    return { user: userData, petOwner: PetOwnerData };
                default:
                    console.log(`Sorry, we are out of profiles`);
            };


        }
    },

    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        addPetSitterUser: async (parent, args) => {
            try {
                const petSitterUser = await User.create(args);
                const sitterToken = signToken(petSitterUser);
                const petSitterData = await PetSitter.create({ _id: petSitterUser._id, ...args })
                return { token: sitterToken, user: petSitterUser, petSitter: petSitterData };
            } catch (err) {
                console.log(err);
            }

        },

        addPetOwnerUser: async (parent, args) => {
            try {
                const petOwnerUser = await User.create(args);
                const ownerToken = signToken(petOwnerUser);
                const petOwnerData = await PetOwner.create({ _id: petOwnerUser._id, ...args })
                return { token: ownerToken, user: petOwnerUser, petOwner: petOwnerData };
            } catch (err) {
                console.log(err);
            }

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
