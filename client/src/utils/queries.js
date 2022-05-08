import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      pets {
        _id
        name
        size {
          _id
          name
        }
        description
        image
        health {
          _id
          name
        }
        sociability {
          _id
          name
        }
        ratings
      }
      eventsOwned {
        pets{
          _id
          name
        }
        petSitter{
          _id
          username
        }
        daysOfEvent{
          _id
          start
          end
        }
        price
        status{
          _id
          name
        }
        petsRating
        petSitterRating
      }
    }
  }
`
export const QUERY_PETSITTER_PROFILE = gql`
  query petSitterProfile {
    petSitter {
      _id
      username
      email
      services {
        name
      }
      ratePerNight
      description
      image
      sizes {
        name
      }
      healthReady {
        name
      }
      socialReady{
        name
      }
      ratings
      availability
      daysOff {
        start
        end
      }
      eventsOffered {
        pets{
          name
        }
        username
        daysOfEvent{
          _id
          start
          end
        }
        price
        status{
          name
        }
        petsRating
        petSitterRating
      }
    }
  }
`
export const PETSITTER = gql`
  query petSitter($petSitterId: ID!) {
    petSitter (_id: $petSitterId){
      _id
      username
      email
      services {
        name
      }
      ratePerNight
      description
      image
      sizes {
        name
      }
      healthReady {
        name
      }
      socialReady{
        name
      }
      ratings
      availability
    }
  }
`
export const SEARCH_PETSITTERS = gql`
  query PetSitters($services: ID!, $size: ID!, $health: ID!, $sociability: ID!) {
    petSitters(services: $services, size: $size, health: $health, sociability: $sociability) {
      _id
      username
      services {
        name
      }
      image
      ratings
      healthReady {
        name
      }
      socialReady {
        name
      }
      sizes {
        name
      }
    }
  }
`

export const GET_SIZES = gql`
  query sizes {
    sizes {
      name
    }
  }
`
export const GET_HEALTHS = gql`
  query healths {
    healths {
      name
    }
  }
`
export const GET_SERVICES = gql`
  query services {
    services {
      name
    }
  }
`
export const GET_SOCIABILITES = gql`
  query sociabilities {
    sociabilities {
      name
    }
  }
`
export const PETS = gql`
  query pets {
    pets {
      name
      image
    }
  }
`