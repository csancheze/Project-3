# woofstel
  ![GitHub license](https://img.shields.io/badge/license-ISC-green.svg)
  # Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Questions](#questions)
  

  ## Description
  This is an application to offer an opportunity to your dog to be nurtured and loved while you work or go out on holidays. Dogs are part of the family. We want your dog to be taken care of by dog lovers in the comfort of their home and assure they will be happy while you do your things.


  The technologies used in this project are:
  - Javascript
  - CSS
  - HTML
  - Express.js
  - React.js
  - Node.js
  - Email.js
  - Rsuite
  - Ant Design
  - Bootstrap


  ## Installation
  Download this repo, run npm i to install all the modules and packages required.
  If you want to locally run the app, just execute git run develop.
  If you want to run the app from the web, go to https://woofstel-app.herokuapp.com/


  ## Usage
  This is an app that works for both pet-owners and pet-sitters.
    - Use it if you want to find a place for your dog to be nurtured and loved for the time you need.
    - Use it if you want to become a pet-sitter and receive at home lovely pets while their owners do their things.
  

  ## License
    Project Licensed under ISC


  ## Contribution
  The devolopers involved in this project are:

  - César Sánchez: Lead on Model, Queries, Mutations, Client – Server Connection, Type Defs.
  - Mariana Romero: Overall Design, CSS, Bootstrap, Queries, Mutation, Type Defs. 
  - Isaias Reyes: Leader - Overall Design, CSS, Bootstrap, Queries and Mutation.
  - Régulo Argotte: Queries, Mutations, Type Defs Bootstrap and CSS.

  
  ## User Story
  ```
  As a Pet-Owner I want to
  - Be able to search for a Pet Sitter.
  - Book the service.
  - Be contacted by Pet Sitter for final agreement.
  - Check my profile
    - Pets
    - Events
  As a Pet-Sitter I want to
  - Be able to offer my services as a Pet Sitter.
  - Be notified if Pet Owner request my services.
  - Be contacted by Pet Sitter for final agreement.
  - Accept or reject requisitions from Pet Owners
  - Contact Pet owner for final agreement.
  - Check my profile
    - Services I offer
    - Events
  ```


  ## Acceptance Criteria
  ```
  WHEN I enter the app then I'm presented with a landing page with options for
    - Contact Us
    - Login
    - Sign up as Pet Owner.
    - Sign up as Pet Sitter.
  WHEN I click the log in section
  THEN I'm presented with the email and password to be input.
  WHEN I log in
  THEN I'm redirected to my profile.
    As a Pet Owner
        - I can add pets.
        - Check my events.
        - I am presented with a list of
            - My pets
            - My events
          WHEN I click on Search Pet Sitter
          THEN I am presented with a list of filters to do my search
          WHEN I click on search
          THEN I am presented with a list of Pet Sitters available
          WHEN I click on "view more" 
          THEN I am presented with a modal with more details and the option to book.
          WHEN I click on "Make a reservation"
          THEN I am redirected to my profile and the event shows in the "Upcoming Events" list.
          WHEN the Pet Sitter accepts my request.
          THEN I am presented with the event with the option to pay.
          WHEN I click on "pay"
          THEN I am presented with the event with the status changed to "Pet Sitter will contact you"
    As a Pet Sitter
        - Set my status
        - Add days off
        - Select type of services I provide
        - I am presented with a list of My Events
        WHEN I click on "confirm" any event
        THEN I am presented with the event with the status changed to "wait for payment".
        WHEN the Pet Owner clicks on Pay
        THEN I am presented with the event with the status changed to "Contact Client Soon".
        WHEN I click on the hyperlink "Contact Client Soon"
        THEN I am redirected to my e-mail to send an email to my customer.
  ```


  ## Mock-Up
  The following images show the application appearance and functionality:
  - Landing page
  ![The landing page](./client/src/images/Landing%20page.png/images/landing-page.png)

  - Log in page
  ![Login](./client/src/images/Login%20page.png)

  - Sign up Page - Pet Owner
  ![Sign up - Pet Owner](./client/src/images/Sign%20up%20page%20-%20PetOwner.png)

  - Sign up Page - Pet Sitter
  ![Sign up - Pet Sitter](./client/src/images/Sign%20up%20page%20-%20PetSitter.png)

  - User profile - Pet Owner
  ![Profile - Pet Owner](./client/src/images/Profile%20Pet%20Owner.png)

  - User profile - Pet Sitter
  ![Profile - Pet Sitter](./client/src/images/Profile%20Pet%20Sitter.png)

  - More Detail - EVent
  ![More Detail - EVen](./client/src/images/View%20More.png)

  - Search Pet Sitter Page
  ![Search Pet Sitter Page](./client/src/images/Search%20Page.png)

  ## Questions
  If you have any question please feel free to reach the dev team:
  * [csancheze](https://github.com/csancheze)
  * [ireyesleon](https://github.com/ireyesleon)
  * [marian94](https://github.com/Marian94)
  * [rargotte](https://github.com/rargotte)
  
