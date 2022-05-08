const { gql } = require('apollo-server-express');
const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    role: String!
  }


  type Auth {
    token: ID!
    user: User
    petSitter: PetSitter 
    petOwner : PetOwner
  }

  type Profile {
    user: User!
    petSitter: PetSitter 
    petOwner : PetOwner
  }

  type Query {
    me: Profile
  }
  
  type PetOwner {
    _id: ID
    petsOwned: [PetSchema],
    eventsOwned: [Event]
  }
  type PetSchema {
     name: String!
     size: String!
     description: String
     image: String
     health: Health
     sociability: Sociability
     ratings: [Int]
  }
  input InputPet {
    name: String!
    size: String!
    description: String
    image: String
    health: InputHealth
    sociability: InputSociability
    ratings: [Int]
 }

  input InputSize {
    name: String
 }

  input InputHealth {
    name: String
 }

  input InputSociability {
    name: String
 }

 input InputSize {
  name: String
}



 
    type PetSitter {
        _id: ID!
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

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, role: String!): Auth
    addPetSitterUser(username: String!, email: String!, password: String!, role: String!, ratePerNight: Float!): Auth
    addPetOwnerUser(username: String!, email: String!, password: String!, role: String!, petsOwned:[InputPet] ): Auth

  }
`;

module.exports = typeDefs;
