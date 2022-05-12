import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ADD_EVENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const ModalPetSitter = ({
  show,
  onHide,
  petSitter,
  petOwnerId,
  daysOfEvent,
  dogsId,
  price,
  ratings,
  services,
  socials,
  sizes,
  healths,
}) => {
  const [AddEvent, { error }] = useMutation(ADD_EVENT);

  const makeReservation = async () => {
    try {
      const addEvent = await AddEvent({
        variables: {
          petOwner: petOwnerId,
          petSitter: petSitter._id,
          daysOfEvent: daysOfEvent,
          pets: [dogsId],
          price: price,
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
  return (
    <Modal show={show} onHide={onHide}>
      <div style={{ backgroundColor: "#2cccc4" }}>
        <Modal.Header closeButton>
          <Modal.Title>{petSitter.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="pb-3">
          <h3>Petsitter description:</h3>
          <p className="pb-3">{petSitter.description}</p>
          <h3>Services offered:</h3>
          <p className="pb-3">{services}</p>
          <h3>Sizes allowed:</h3>
          <p className="pb-3">{sizes}</p>
          <h3>Prepared for:</h3>
          {healths}
          <p className="pb-3">{socials}</p>
          <h3>Rating: {Number.isNaN(ratings) ? "No ratings yet" : ratings}</h3>

          <h1>Price for reservation: ${price} MXN</h1>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button id="submit-button" onClick={makeReservation}>
            Make a Reservation
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};
export default ModalPetSitter;
