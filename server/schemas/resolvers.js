const { AuthenticationError } = require('apollo-server-express');
//const { update } = require('../models/User');
const { signToken } = require('../utils/auth');
const { User, PetSitter, PetOwner, Health, Size, TypeOfService, Sociability, Status, RangeOfDays, Pet, Event } = require('../models');
//const { populate } = require('../models/Pet');
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
                    const PetSitterData = await PetSitter.findOne({ userId: context.user._id })
                        .populate('daysOff');
                    return { user: userData, petSitter: PetSitterData };
                case "PetOwner":
                    const PetOwnerData = await PetOwner.findOne({ userId: context.user._id })
                    .populate('petsOwned');
                    return { user: userData, petOwner: PetOwnerData };
                default:
                    console.log(`Sorry, we are out of profiles`);
            };


        },
        /*            if (context.user) {
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
                            }])
                            .populate('eventsOwned')
                            .populate([{
                                path: 'eventsOwned',
                                populate: {
                                    path: 'pets',
                                    model: 'Pet'
                                },
                                populate: {
                                    path: 'petSitter',
                                    model: 'PetSitter'
                                },
                                populate: {
                                    path: 'daysOfEvent',
                                    model: 'RangeOfDays'
                                },
                                populate: {
                                    path: 'status',
                                    model: 'Status'
                                },
                            }])
                        return userData;
                    }
                    console.log("context user:" + context.user);
                    throw new AuthenticationError('Please, log in!');
                },*/
        petSitterProfile: async (parent, args, context) => {
            if (context.petSitter) {
                const userData = await PetSitter.findOne({ _id: context.petSitter._id })
                    .select('-__v -password')
                    .populate('services')
                    .populate('sizes')
                    .populate('socialReady')
                    .populate('healthReady')
                    .populate('eventsOffered')
                    .populate([{
                        path: 'eventsOffered',
                        populate: {
                            path: 'pets',
                            model: 'Pet'
                        },
                        populate: {
                            path: 'username',
                            model: 'User'
                        },
                        populate: {
                            path: 'daysOfEvent',
                            model: 'RangeOfDays'
                        },
                        populate: {
                            path: 'status',
                            model: 'Status'
                        },
                    }])
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
                    sizes: { $in: args.size },
                    healthReady: { $in: args.health },
                    socialReady: { $in: args.sociability }
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
            const healths = await Health.find({})
            return healths
        },

        services: async (parent, args, context) => {
            const services = await TypeOfService.find({})
            return services
        },

        sociabilities: async (parent, args, context) => {
            const sociabilities = await Sociability.find({})
            return sociabilities

        },

        pets: async (parent, args, context) => {
            const pets = await Pet.find({}).populate('human');
            return pets

        },
    },

    Mutation: {

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
            switch (user.role) {
                case "PetSitter":
                    const petSitterData = await PetSitter.findOne({ _id: user._id });
                    return { token, user, petSitter: petSitterData };
                case "PetOwner":
                    const petOwnerData = await PetOwner.findOne({ _id: user._id });
                    return { token, user, petOner: petOwnerData };
                default:
                    console.log(`Sorry, we are out of profiles`);
            }
        },

        addHealth: async (parent, args) => {
            const health = await Health.create(args);
            return health;
        },

        addSize: async (parent, args) => {
            const size = await Size.create(args);
            return size;
        },
        addService: async (parent, args) => {
            const service = await TypeOfService.create(args);
            return service;
        },
        addSociability: async (parent, args) => {
            const sociability = await Sociability.create(args);
            return sociability;
        },
        addStatus: async (parent, args) => {
            const status = await Status.create(args);
            return status;
        },
        addDaysOff: async (parent, args, context) => {
            try {
                const start = new Date(args.start)
                const end = new Date(args.end)
                const newDaysOff = await RangeOfDays.create({ start, end });
                const petSitter = await PetSitter.findByIdAndUpdate(context.user._id, {
                    $addToSet: { daysOff: newDaysOff._id }
                })
                return petSitter
            } catch (err) {
                console.log(err);
            }
        },
        addPet: async (parent, args, context) => {
            try {
                const newPet = await Pet.create(args)
                const petOwner = await PetOwner.findByIdAndUpdate(context.user._id, {
                    $addToSet: { petsOwned: newPet._id }
                })
                return petOwner
            } catch (err) {
                console.log(err);
            }
        },

        // addPetSitter: async(parent, args) => {
        //         const user = await PetSitter.create(args);
        //         const token = signToken(user);

        //         return { token, user };
        // },

        addEvent: async (parent, args, context) => {
            if (context.user) {
                const newEvent = await Event.create(args)
                return newEvent;
            }
        },

        updateEventStatus: async (parent, args, context) => {
            const changeStatus = await Event.findByIdAndUpdate(
                args._id, { status: args.status }
            )
            return changeStatus
        },

        addPetSitterRating: async (parent, args, context) => {
            const petSitter = await PetSitter.findByIdAndUpdate(args.petSitter._id, {
                $push: { ratings: args.rating }
            })
            return petSitter
        },

        addPetRating: async (parent, args, context) => {
            //send in args.rating "name-4"
            const ratingArray = args.rating.split("-")
            const pet = await Pet.findOneAndUpdate({ name: ratingArray[0] }, {
                $push: { ratings: ratingArray[1] }
            })
            return pet
        },

        updateAvailability: async (parent, args, context) => {
            let newAvailability = args.availability
            if (newAvailability === true) {
                newAvailability = false
            } else {
                newAvailability = true
            }
            const petSitter = await PetSitter.findByIdAndUpdate(context.petSitter._id, {
                availability: newAvailability
            })

            return petSitter
        }

    }

};


module.exports = resolvers;
