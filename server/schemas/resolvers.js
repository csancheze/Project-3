const { AuthenticationError } = require('apollo-server-express');
const { User, PetSitter } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    petSitter: async (parent, args, context) => {
      return await PetSitter.findById(context.user._id)
        .populate('services')
        .populate('sizes')
        .populate('socialReady')
        .populate('healthReady')
        .populate('daysOff')
        .populate('eventsOffered')
      },
    petSitters: async (parent, args, context) => {
      const petSitters = await PetSitter.find([
        {availability: true}, {}

      ])
    }

    user: async (parent, args, context) => {}

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
