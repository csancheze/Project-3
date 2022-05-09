import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userame: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DAYSOFF = gql`
  mutation addDaysOff($start:String, $end: String) {
    addDaysOff(start: $start, end: $end) {
      token
      petSitter{
        daysOff{
          start
          end
        }
      }
    }
  }
`

export const ADD_PET = gql`
  mutation addPet($human: ID!, $name: String!, $size: String, $health: ID!, $sociability: ID!) {
    addPet(human: $human, name: $name, size: $size, health: $health, sociability: $sociability) {
      _id
      name
      size {
        
        name
      }
      description
      image
      health {
        name
      }
      sociability {
        name
      }
    }
  }
`

export const ADD_EVENT = gql`
  mutation Mutation($username: ID!, $petSitter: ID!, $daysOfEvent: ID!, $status: ID!) {
    addEvent(username: $username, petSitter: $petSitter, daysOfEvent: $daysOfEvent, status: $status) {
      _id
      username {
        username
      }
      pets {
        name
      }
      petSitter {
        username
      }
      daysOfEvent {
        start
        end
      }
      price
      status {
        name
      }
      petsRating
      petSitterRating
    }
  }
`


export const UPDATE_EVENT_STATUS = gql`
  mutation UpdateEventStatus($status: ID!) {
  updateEventStatus(status: $status) {
    _id
    status {
      name
    }
    daysOfEvent {
      start
      end
    }
  }
}
`

export const ADD_PETSITTER_RATING = gql`
  mutation AddPetSitterRating($id: ID!, $rating: Int) {
  addPetSitterRating(_id: $id, rating: $rating) {
    _id
    username
    ratings
  }
}
`
export const ADD_PET_RATING = gql`
  mutation AddPetRating($id: ID!, $rating: String) {
    addPetRating(_id: $id, rating: $rating) {
      _id
      name
      ratings
    }
}
`

export const UPDATE_AVAILABILTY = gql`
mutation UpdateAvailability($availability: Boolean) {
  updateAvailability(availability: $availability) {
    username
    availability
    _id
  }
}
`