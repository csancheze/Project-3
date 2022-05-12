const { AuthenticationError } = require('apollo-server-express');
//const { update } = require('../models/User');
const { signToken } = require('../utils/auth');
const { User, PetOwner, PetSitter, Health, Size, TypeOfService, Sociability, Status, RangeOfDays, Pet, Event } = require('../models');
const { assertInterfaceType } = require('graphql');
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
                    const PetSitterData = await PetSitter.findOne({ _id: context.user._id })
                        .select('-__v -password')

                        .populate('services')
                        .populate('sizes')
                        .populate('socialReady')
                        .populate('healthReady')
                        .populate('eventsOffered')
                        .populate('daysOff')
                        .populate([{
                            path: 'eventsOffered',
                            populate: {
                                path: 'pets',
                                model: 'Pet'
                            }
                        }])
                        .populate([{
                            path: 'eventsOffered',
                            populate: {
                                path: 'petOwner',
                                model: 'PetOwner'
                            }
                        }])
                        .populate([{
                            path: 'eventsOffered',
                            populate: {
                                path: 'petSitter',
                                model: 'PetSitter'
                            }
                        }])
                        .populate([{
                            path: 'eventsOffered',
                            populate: {
                                path: 'daysOfEvent',
                                model: 'RangeOfDays'
                            }
                        }])



                    return { user: userData, petSitter: PetSitterData };

                case "PetOwner":
                    const PetOwnerData = await PetOwner.findOne({ _id: context.user._id })
                        // .populate('petsOwned')
                        .populate([{
                            path: 'petsOwned',

                            populate: {
                                path: 'sociability',
                                model: 'Sociability'
                            }
                        }])
                        .populate([{
                            path: 'petsOwned',
                            populate: {
                                path: 'health',
                                model: 'Health'
                            }
                        }])
                        .populate([{
                            path: 'petsOwned',
                            populate: {
                                path: 'size',
                                model: 'Size'
                            }
                        }])
                        // .populate('eventsOwned')
                        .populate([{
                            path: 'eventsOwned',
                            populate: {
                                path: 'pets',
                                model: 'Pet'
                            }
                        }])
                        .populate([{
                            path: 'eventsOwned',
                            populate: {
                                path: 'petSitter',
                                model: 'PetSitter'
                            }
                        }])
                        .populate([{
                            path: 'eventsOwned',
                            populate: {
                                path: 'petOwner',
                                model: 'PetOwner'
                            }
                        }])
                        .populate([{
                            path: 'eventsOwned',
                            populate: {
                                path: 'daysOfEvent',
                                model: 'RangeOfDays'
                            }
                        }])

                    console.log(PetOwnerData.eventsOwned.daysOfEvent)
                    return { user: userData, petOwner: PetOwnerData };
                default:
                    console.log(`Sorry, we are out of profiles`);
            };

        },

        petSitter: async (parent, args, context) => {
            return await PetSitter.findById(args._id)
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
                .populate('sizes')
                .populate('socialReady')
                .populate('healthReady')
                .populate('daysOff')
                .sort({ ratePerNight: -1 })

            console.log(petSitters)

            const filteredPetSitters = []
            let start = new Date(args.daysStart)
            console.log(start)
            let end = new Date(args.daysEnd)
            

            //check for each Petsitter, for each daysOff if it is between the event dates, if none of the daysoff are between, then push the petSitter to the filtered array

            for (let i = 0; i < petSitters.length; i++) {
                let includesDaysOff = false

                for (let j = 0; j < petSitters[i].daysOff.length; j++) {
                    console.log(start < petSitters[i].daysOff[j].start)
                    let dayoffStart = new Date(parseInt(petSitters[i].daysOff[j].start))
                    let dayoffEnd  = new Date(parseInt(petSitters[i].daysOff[j].end))
                    if (start < dayoffStart < end || start < dayoffEnd < end) {
                        includesDaysOff = true
                    }
                }
                if (includesDaysOff === false) {
                    console.log(petSitters[i])
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
            const pets = await Pet.find({}).populate('owner')
                .populate('health');
            return pets

        },

        // status: async (parent, args, context) => {
        //     const status = await Status.find({})

        //     return status

        // },
    },

    Mutation: {

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
                .populate('sizes')
                .populate('socialReady')
                .populate('healthReady')
                .populate('daysOff')
                .sort({ ratePerNight: -1 })

            console.log(petSitters)

            const filteredPetSitters = []
            let startSearch = new Date(args.daysStart)
            let endSearch = new Date(args.daysEnd)
          

            //check for each Petsitter, for each daysOff if it is between the event dates, if none of the daysoff are between, then push the petSitter to the filtered array

            for (let i = 0; i < petSitters.length; i++) {
                let includesDaysOff = false

                for (let j = 0; j < petSitters[i].daysOff.length; j++) {
                    

                    let dayoffStart = new Date(petSitters[i].daysOff[j].start)
                    let dayoffEnd  = new Date(petSitters[i].daysOff[j].end)
                    console.log("compare", startSearch , dayoffStart, dayoffEnd)
                    if (startSearch > dayoffStart && startSearch < dayoffEnd ) {
                        includesDaysOff = true
                    }
                    if (endSearch > dayoffStart && endSearch < dayoffEnd) {
                        includesDaysOff = true
                    }
                }
                if (includesDaysOff === false) {
                    filteredPetSitters.push(petSitters[i])
                }
            }
            return filteredPetSitters
        },


        addPetSitterUser: async (parent, args) => {
            try {
                const petSitterUser = await User.create(args);
                const sitterToken = signToken(petSitterUser);
                const petSitterData = await PetSitter.create({
                    _id: petSitterUser._id,
                    name: petSitterUser.username,
                    services: args.services,
                    ratePerNight: args.ratePerNight,
                    description: args.description,
                    image: args.image,
                    sizes: args.sizes,
                    healthReady: args.healthReady,
                    socialReady: args.socialReady
                })
                return { token: sitterToken, user: petSitterUser, petSitter: petSitterData };
            } catch (err) {
                console.log(err);
            }

        },

        addPetOwnerUser: async (parent, args) => {
            try {

                const petOwnerUser = await User.create(args);
                const ownerToken = signToken(petOwnerUser);
                const petOwnerData = await PetOwner.create({
                    _id: petOwnerUser._id,
                    name: petOwnerUser.username
                })
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
                    return { token, user, petOwner: petOwnerData };
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
        // addStatus: async(parent, args) => {
        //     const status = await Status.create(args);
        //     return status;
        // },
        addDaysOff: async (parent, args, context) => {
            const start = new Date(args.start)
            const end = new Date(args.end)
            const newDaysOff = await RangeOfDays.create({ start, end })
            const petSitter = await PetSitter.findByIdAndUpdate(context.user._id, {
                $push: { daysOff: newDaysOff }
            }, { new: true }).populate('daysOff')
            return petSitter
        },
        addPet: async (parent, args, context) => {
            const newPet = await Pet.create(args)
            const user = await PetOwner.findOneAndUpdate({ _id: context.user._id }, {
                $push: { petsOwned: newPet }
            }, { new: true })
                .populate('petsOwned')
            console.log(user)

            console.log(newPet);
            return { ...newPet }
        },


        addEvent: async (parent, args, context) => {
            const daysofeventArray = args.daysOfEvent.split(",")
            console.log(args.daysOfEvent)
            const start = new Date(daysofeventArray[0])
            const end = new Date(daysofeventArray[1])
            const newDaysOfEvent = await RangeOfDays.create({ start, end })
            args.daysOfEvent = newDaysOfEvent
            console.log(newDaysOfEvent)
            if (context.user) {
                const newEvent = await Event.create(args)
                const petOwner = await PetOwner.findOneAndUpdate({ _id: args.petOwner }, {
                    $push: { eventsOwned: newEvent }
                }, { new: true })
                console.log(petOwner)
                const petSitter = await PetSitter.findOneAndUpdate({ _id: args.petSitter }, {
                    $push: { eventsOffered: newEvent }
                }, { new: true })
                console.log(petSitter)
                return "Event added";
            }
        },

        updateEventStatus: async (parent, args, context) => {
            const changeStatus = await Event.findByIdAndUpdate(
                args.eventId, { status: args.status }, {
                    new: true
                  }
            )
            console.log(args.eventId)
            console.log(args.status)
            console.log(changeStatus)
            if (changeStatus.status == "Paid") {
                const addContactInfo = await Event.findByIdAndUpdate(
                    args.eventId, { contactInfo: context.user.email}
                )
                return addContactInfo
            }
            return changeStatus
        },

        addPetSitterRating: async (parent, args, context) => {
            const event = await Event.findByIdAndUpdate(args.eventId,
                { petSitterRating: args.rating }
            )
            console.log(event)
            const petSitter = await PetSitter.findByIdAndUpdate(args.petSitterId, {
                $push: { ratings: args.rating }
            })
            return petSitter
        },

        updatePetSitter: async (parent, args, context) => {

            const petSitterData = await PetSitter.findByIdAndUpdate(context.user._id, {
                services: args.services,
                ratePerNight: args.ratePerNight,
                description: args.description,
                image: args.image,
                sizes: args.sizes,
                healthReady: args.healthReady,
                socialReady: args.socialReady
            })
            return petSitterData;
        },

        addPetRating: async (parent, args, context) => {

            const pet = await Pet.findOneAndUpdate({ _id: args.dogId }, {
                $push: { ratings: args.rating }
            })
            const event = await Event.findByIdAndUpdate(args.eventId, {
                $push: {
                    petsRating: `${args.name} - ${args.rating}`
                }
            })
            console.log(event)
            return pet
        },

        updateAvailability: async (parent, args, context) => {
            let newAvailability = args.availability
            if (newAvailability === true) {
                newAvailability = false
            } else {
                newAvailability = true
            }
            const petSitter = await PetSitter.findByIdAndUpdate(context.user._id, {
                availability: newAvailability
            })

            return petSitter
        },

        deletePet: async (parent, args, context) => {
            const petDeleted = await Pet.findByIdAndDelete({ _id: args.dogId })
            console.log("Pet Deleted: " + petDeleted)
            const user = await PetOwner.findByIdAndUpdate({ _id: context.user._id }, {
                $pull: { petsOwned: args.dogId }
            })
            return { ...petDeleted }
        },


        deleteDaysOff: async (parent, args, context) => {
            const DaysOffDeleted = await RangeOfDays.findByIdAndDelete({ _id: args.rangeId })
            const user = await PetSitter.findByIdAndUpdate({ _id: context.user._id }, {
                $pull: { daysOff: args.rangeId }
            })
            return { ...PetSitter }
        },

        deleteEvent: async (parent, args, context) => {
            const event = await Event.findByIdAndDelete({ _id: args.eventId })
            const petSitterData = await PetSitter.findByIdAndUpdate({ _id: args.petSitterId }, {
                $pull: { eventsOffered: args.eventId }
            })
            console.log(petSitterData)
            const petOwnerData = await PetOwner.findByIdAndUpdate({ _id: args.petOwnerId}, {
                $pull: { eventsOwned: args.eventId }
            })
            console.log(petOwnerData)
            return { event }
        },

    },


}

module.exports = resolvers;
