import { gql } from '@apollo/client';

export const LOGIN_PETOWNER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
      petOwner {
        _id
        name
      }
    }
}
`;

export const LOGIN_PETSITTER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
      petSitter {
        _id
        name
      }
    }
  }
`;

export const ADD_USER_PETOWNER= gql`
  mutation AddPetOwnerUser($username: String!, $email: String!, $password: String!, $role: String!) {
    addPetOwnerUser(username: $username, email: $email, password: $password, role: $role) {
      token
      user {
        _id
        username
        email
        role
      }
      petOwner {
        _id
        name
      }
    }
  }
`;
export const ADD_USER_PETSITTER= gql`
  mutation AddPetSitterUser($username: String!, $email: String!, $password: String!, $role: String!, $ratePerNight: Float, $services: [ID], $description: String, $sizes: [ID], $healthReady: [ID], $socialReady: [ID]) {
    addPetSitterUser(username: $username, email: $email, password: $password, role: $role, ratePerNight: $ratePerNight, services: $services, description: $description, sizes: $sizes, healthReady: $healthReady, socialReady: $socialReady) {
      token
      user {
        _id
        username
        email
        role
      }
      petSitter {
        _id
        name
      }
    }
  }
`;
export const ADD_DAYSOFF = gql`
  mutation AddDaysOff($start: String!, $end: String!) {
    addDaysOff(start: $start, end: $end) {
      _id
      name
      daysOff {
        start
        end
      }
    }
  }
`

export const ADD_PET = gql`
  mutation AddPet($owner: ID!, $name: String!, $size: ID!, $health: ID!, $sociability: ID!, $description: String, $image: String) {
    addPet(owner: $owner, name: $name, size: $size, health: $health, sociability: $sociability, description: $description, image: $image) {
      _id
      name
    }
  }
`

export const ADD_EVENT = gql`
    mutation AddEvent($petOwner: ID!, $petSitter: ID!, $daysOfEvent: String!, $pets: [ID!], $price: Float) {
      addEvent(petOwner: $petOwner, petSitter: $petSitter, daysOfEvent: $daysOfEvent, pets: $pets, price: $price) {
        _id
        petOwner {
          name
          _id
        }
        petSitter {
          _id
          name
        }
        pets {
          _id
          name
        }
        daysOfEvent {
          start
          end
        }
        price
        status
      }
    }
`


export const UPDATE_EVENT_STATUS = gql`
  mutation UpdateEventStatus($id: ID!, $status: String) {
    updateEventStatus(_id: $id, status: $status) {
      _id
      status 
      daysOfEvent {
        start
        end
      }
    }
}
`

export const ADD_PETSITTER_RATING = gql`
  mutation AddPetSitterRating($eventId: ID, $petSitterId: ID!, $rating: Int) {
    addPetSitterRating(eventId: $eventId, petSitterId: $petSitterId, rating: $rating) {
      _id
      name
      ratings
    }
  }
`
export const ADD_PET_RATING = gql`
  mutation AddPetRating($eventId: ID!, $dogId: ID!, $name: String!, $rating: Int) {
    addPetRating(eventId: $eventId, dogId: $dogId, name: $name, rating: $rating) {
      _id
      name
      ratings
    }
  }
`

export const UPDATE_AVAILABILTY = gql`
  mutation UpdateAvailability($availability: Boolean) {
    updateAvailability(availability: $availability) {
      _id
      name
      availability
    }
  }
`
export const UPDATE_PETSITTER = gql`
mutation UpdatePetSitter($services: [ID], $ratePerNight: Float, $description: String, $sizes: [ID], $healthReady: [ID], $socialReady: [ID], $image: String) {
  updatePetSitter(services: $services, ratePerNight: $ratePerNight, description: $description, sizes: $sizes, healthReady: $healthReady, socialReady: $socialReady, image: $image) {
    _id
    name
    description
  }
}
`