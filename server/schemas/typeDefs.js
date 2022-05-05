const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type PetSitters {
        _id: ID
        username: String
        email: String
        password: String
        services: [TypeOfService]
        ratePerNight: Float
        description: String
        image: String
        sizes: [Size]
        healthReady: Health
        socialReady: [Sociability]
        ratings: [Int]
        availability: Boolean
        daysOff: [RangeOfDays]
        eventsOffered: [Events]
    }

    type Event {
        _id: ID
        username: User
        pets: [Pet]
        petSitter: PetSitter
        daysOfEvent: RangeOfDays
        price: Int
        status: Status
        petsRating: [String]
        petSitterRating: Int
    }

    type Status {
        _id: ID
        name: String
    }

    type RangeOfDays {
        start: String
        end: String
    }

    type TypeOfService {
        _id: ID
        name: String
    }

    type Size {
        _id:ID
        name: String
    }

    type Health {
        _id:ID
        name: String
    }

    type Sociability {
        _id: ID
        name: String
    }


`
module.exports = typeDefs;
