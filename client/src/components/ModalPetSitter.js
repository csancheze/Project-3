import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalPetSitter = ({
  show,
  onHide,
  petSitter,
  petOwnerId,
  daysOfEvent,
  dogsId,
  price,
}) => {
  // AddEvent($petOwner: ID!, $petSitter: ID!, $daysOfEvent: String!, $pets: [ID!], $price: Float)

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{petSitter.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Props for add a reservation: petOwnerId {petOwnerId}, petSitterId{" "}
        {petSitter._id}, daysOfEvent {daysOfEvent}, petId {dogsId}, price{" "}
        {price}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button id="submit-button" onClick={onHide}>
          Make a Reservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPetSitter;
