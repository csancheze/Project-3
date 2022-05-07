const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    pets: [Pet]
    eventsOwned: [Event]
  }

  type Auth {
    token: ID!
    user: User
  }
 
  type PetSitterProfile {
    id: ID
    username: String
    email: String
    password: String
    services: [TypeOfService]
    ratePerNight: Float
    description: String
    image: String
    sizes: [Size]
    healthReady: [Health]
    socialReady: [Sociability]
    ratings: [Int]
    availability: Boolean
    daysOff: [RangeOfDays]
    eventsOffered: [Event]
  }  

  type PetSitter {
    _id: ID
    username: String
    services: [TypeOfService]
    ratePerNight: Float
    description: String
    image: String
    sizes: [Size]
    healthReady: [Health]
    socialReady: [Sociability]
    ratings: [Int]
    availability: Boolean
  }

  type PetSitters {
    _id: ID
    username: String
    services: [TypeOfService]
    image: String
    sizes: [Size]
    healthReady: Health
    socialReady: [Sociability]
    ratings: [Int]
    availability: Boolean
    daysOff: [RangeOfDays]
  }

  type Event {
    _id: ID
    username: User
    pets: [Pet]
    petSitter: PetSitter
    daysOfEvent: RangeOfDays
    price: Float
    status: Status
    petsRating: [String]
    petSitterRating: Int
  }

  type Status {
    _id: ID
    name: String
  }

  type RangeOfDays {
    _id: ID
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

  type Pet {
    _id: ID
    human: User
    name: String
    size: Size
    description: String
    image: String
    health: Health
    sociability: Sociability
    ratings: [Int]
  }

  type Query {
    me: User
    petSitterProfile: PetSitterProfile
    petSitter(_id:ID!): PetSitter
    petSitters(services: ID!, size: ID!, health: ID!, sociability:ID!): PetSitters
    sizes: [Size]
    healths: [Health]
    services: [TypeOfService]
    sociabilities: [Sociability]
    pets: [Pet]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addHealth(name: String!): Health
    addSize(name: String!): Size
    addSociability(name: String!): Sociability
    addStatus(name: String!): Status
    addService(name: String!): TypeOfService
    addDaysOff(start: String!, end: String!): RangeOfDays
    addPet(human:ID!, name: String!, size: ID!, description: String, image: String, health: ID!, sociability: ID!): Pet
    addEvent(username: ID!, pets: [ID!], petSitter: ID!, daysOfEvent: ID!, price: Float, status: ID!): Event
    updateEventStatus(status: ID!): Event
    addPetSitterRating(_id: ID!, rating: Int): PetSitter
    addPetRating( _id: ID!, rating: String): Pet
    updateAvailability(availability: Boolean): PetSitter
  }
 
`;

module.exports = typeDefs;
