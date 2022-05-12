import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ADD_EVENT } from "../utils/mutations";
import { PETSITTER } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";

const ModalPetSitter = ({
  show,
  onHide,
  petSitter,
  petOwnerId,
  daysOfEvent,
  dogsId,
  price,
}) => {

  const [AddEvent, { error }] = useMutation(ADD_EVENT);
  const [petSitterInfo, setPetSitterInfo] = useState({});
  const { loading, data } =useQuery(PETSITTER, {
    variables: {
      petSitterId: petSitter._id
    }
  });
  setPetSitterInfo(data.petSitter)

  const makeReservation = async () =>{
    try {
      const addEvent = await AddEvent({
        variables: {
          petOwner: petOwnerId,
          petSitter: petSitter,
          daysOfEvent: daysOfEvent,
          pets: [dogsId],
          price: price
        },
      });
      console.log(addEvent);
      if (addEvent) {
        alert("Reservation Created");
        window.location.assign("/profile-petowner");
      }
   } catch (e) {
    alert("Failed to make reservation!");
    console.error(e, error);
  }
  };

  const getAverage = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = (sum / array.length) || 0;
    return avg
  }


  // AddEvent($petOwner: ID!, $petSitter: ID!, $daysOfEvent: String!, $pets: [ID!], $price: Float)

  return (
    
    <Modal show={show} onHide={onHide}>
      
      <Modal.Header closeButton>
        <Modal.Title>{petSitter.name}</Modal.Title>
      </Modal.Header>
      {loading ? (<div>loading..</div>) : (  
      <Modal.Body>
        Props for add a reservation: petOwnerId {petOwnerId}, petSitterId{" "}
        {petSitter._id}, daysOfEvent {daysOfEvent}, petId {dogsId}, price{" "}
        {price}
        <h1>{petSitterInfo.name} <span>Rating: {getAverage(petSitterInfo.ratings)}</span></h1>

        <p>{petSitterInfo.description}</p>
        <ul>
          {petSitterInfo.services.map(service =>{
            <li>{service.name}</li>
          })}
        </ul>
        <ul>
          {petSitterInfo.sizes.map(size =>{
            <li>{size.name}</li>
          })}
        </ul>
        <ul>
          {petSitterInfo.healthReady.map(health =>{
            <li>{health.name}</li>
          })}
        </ul>
        <ul>
          {petSitterInfo.socialReady.map(social =>{
            <li>{social.name}</li>
          })}
        </ul>
        <p>Price for reservation: {price}</p>



      </Modal.Body>)}
    
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button id="submit-button" onClick={makeReservation}>
          Make a Reservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPetSitter;
