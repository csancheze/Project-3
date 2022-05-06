const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    pets: [Pet]
  }

  type Auth {
    token: ID!
    user: User
  }

  # type Auth2 {
  #   token: ID!
  #   user: PetSitter
  # }
  
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
    healthReady: Health
    socialReady: [Sociability]
    ratings: [Int]
    availability: Boolean
    eventsOffered: [Event]
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
    name: String
    size: Size
    description: String
    image: String
    health: Health
    sociability: Sociability
    ratings: [String]
  }

  type Query {
    me: User
    petSitterProfile: PetSitterProfile
    petSitter(_id:ID!): PetSitter
    petSitters(services: ID!): PetSitters
    sizes: [Size]
    healths: [Health]
    services: [TypeOfService]
    sociabilities: [Sociability]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # loginPetSitter(email: String!, password: String!): Auth2
    addHealth(name: String!): Health
    addSize(name: String!): Size
    addSociability(name: String!): Sociability
    addStatus(name: String!): Status
    addService(name: String!): TypeOfService
    addDaysOff(start: String!, end: String!): RangeOfDays
    addPet(
      name: String!
      size: ID!
      description: String
      image: String
      health: ID!
      sociability: ID!
    ): Auth
    # addPetSitter:(
    #   username: String!
    #   email: String!
    #   password: String!
    #   services: [ID!]
    #   ratePerNight: Float
    #   description: String
    #   image: String
    #   sizes: [ID]
    #   healthReady: [ID!]
    #   socialReady: [ID!]
    # ): Auth2
    addEvent:(
      username: ID!
      pets: [ID!]
      petSitter: ID!
      daysOfEvent: ID!
      price: Float
      status: ID!
    ): Event
    updateEventStatus:(status: ID!): Event
    addPetSitterRating:(_id: ID!, rating: Int): PetSitter
    addPetRating:(_id: ID!, rating: Int): Pet
    updateAvailability:(availability: Boolean): PetSitter
  }
`;

module.exports = typeDefs;
