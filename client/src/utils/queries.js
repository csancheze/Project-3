import { gql } from '@apollo/client';

export const QUERY_ME_PETOWNER = gql`
    query Me {
      me {
        petOwner {
          _id
          name
          petsOwned {
            _id
            name
            ratings
            size {
              name
              _id
            }
            description
            image
            health {
              name
              _id
            }
            sociability {
              name
              _id
            }
          }
          eventsOwned {
            _id
            pets {
              name
              _id
            }
            daysOfEvent {
              start
              end
            }
            petSitter {
              name
              _id
            }
            status {
              name
            }
            petsRating
            petSitterRating
            price
          }
        }
        user {
          username
          _id
          email
          role
        }
      }
    }
  }
`
export const QUERY_ME_PETSITTER = gql`
    query Me {
      me {
        petSitter {
          _id
          name
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
          socialReady {
            name
          }
          ratings
          availability
          daysOff {
            start
            end
          }
          eventsOffered {
            _id
            petOwner {
              name
            }
            pets {
              name
            }
            daysOfEvent {
              start
              end
            }
            price
            status {
              name
            }
            petSitterRating
            petsRating
          }
        }
      }
    }
  }
`


export const PETSITTER = gql`
  query petSitter($petSitterId: ID!) {
    petSitter (_id: $petSitterId){
      _id
      name
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
      name
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

export const STATUS = gql`
  query status {
    status {
      name
    }
  }
`