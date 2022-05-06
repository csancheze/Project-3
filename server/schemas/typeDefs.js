const { gql } = require('apollo-server-express');
const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    pets: [Pet]
  }

  type Pet {
    petId: ID!
    name: String
    size: Size
    description: String
    image: String
    health: Health
    sociability: Sociability
    ratings: [Int]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  

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
        eventsOffered: [Event]
    }


    type Event {
        _id: ID
        username: User
        pets: [Pet]
        petSitter: PetSitters
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

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
