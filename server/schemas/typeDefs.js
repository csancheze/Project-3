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
    petSitter: PetSitterProfile
    petOwner: PetOwner
  }

  type PetOwner {
    _id: ID
    name: String
    petsOwned: [Pet]
    eventsOwned: [Event]
  }

  type Profile {
    user: User!
    petSitter: PetSitterProfile
    petOwner: PetOwner
  }
 
  type PetSitterProfile {
    _id: ID
    name: String
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
    name: String
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
    name: String
    ratePerNight: Float
    services: [TypeOfService]
    image: String
    sizes: [Size]
    healthReady: [Health]
    socialReady: [Sociability]
    ratings: [Int]
    availability: Boolean
    daysOff: [RangeOfDays]
  }

  type Event {
    _id: ID
    petOwner: PetOwner
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
    owner: PetOwner
    name: String
    size: Size
    description: String
    image: String
    health: Health
    sociability: Sociability
    ratings: [Int]
  }

  type Query {
    me: Profile
    petSitter(_id:ID!): PetSitter
    petSitters(services: [ID!], size: ID!, health: ID!, sociability:ID!, daysStart:String!, daysEnd:String!): [PetSitters]
    sizes: [Size]
    healths: [Health]
    services: [TypeOfService]
    sociabilities: [Sociability]
    pets: [Pet]
    status: [Status]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, role: String!): Auth
    addPetSitterUser(
      username: String!
      email: String!
      password: String!
      role: String!
      services:[ID]
      ratePerNight: Float!
      description: String
      sizes: [ID]
      healthReady: [ID]
      socialReady: [ID]
      ): Auth
    addPetOwnerUser(
      username: String!, 
      email: String!, 
      password: String!, 
      role: String! ): Auth
    addHealth(name: String!): Health
    addSize(name: String!): Size
    addSociability(name: String!): Sociability
    addStatus(name: String!): Status
    addService(name: String!): TypeOfService
    addDaysOff(start: String!, end: String!): PetSitterProfile
    addPet(owner:ID!, name: String!, size: ID!, description: String, image: String, health: ID!, sociability: ID!): Pet
    addEvent(petOwner: ID!, pets: [ID!], petSitter: ID!, daysOfEvent: String!, price: Float, status: ID!): Event
    updateEventStatus(_id: ID!, status: ID): Event
    addPetSitterRating(eventId: ID, petSitterId: ID!, rating: Int): PetSitter
    addPetRating( eventId: ID!, dogId: ID!, name:String! rating: Int): Pet
    updateAvailability(availability: Boolean): PetSitter
  }
 
`;

module.exports = typeDefs;
