import React, { useState } from "react";
import {
  Col,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  NavLink,
  Row,
} from "react-bootstrap";
import ModalPetSitter from "./ModalPetSitter";

const CardPetSitter = ({
  data,
  totalDays,
  petOwnerId,
  daysOfEvent,
  dogsId,
}) => {
  const [show, setShow] = useState(false);
  const [petSitterSelect, setPetSitterSelect] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (e, petSitter) => {
    setPetSitterSelect(petSitter);
    setShow(true);
  };

  return (
    <Col md="auto">
      <Row>
        {data.map((petSitter) => (
          <>
            <Card
              key={petSitter._id}
              style={{ width: "18rem", margin: "2rem" }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{petSitter.name}</Card.Title>
                <Card.Text>$ {petSitter.ratePerNight} MXN Per Night</Card.Text>
                <Card.Text>
                  TOTAL $ {petSitter.ratePerNight * totalDays} MXN{" "}
                </Card.Text>
              </Card.Body>

              <Card.Subtitle>Services</Card.Subtitle>
              <ListGroup className="list-group-flush">
                {petSitter.services.map((services) => (
                  <ListGroupItem>{services.name}</ListGroupItem>
                ))}
                <ListGroupItem>
                  <NavLink to="/pet-sitter">
                    <Button
                      onClick={(e) => handleShow(e, petSitter)}
                      id="submit-button"
                    >
                      View more
                    </Button>
                  </NavLink>
                </ListGroupItem>
              </ListGroup>
            </Card>
            <ModalPetSitter
              show={show}
              onHide={handleClose}
              petSitter={petSitterSelect}
              petOwnerId={petOwnerId}
              daysOfEvent={daysOfEvent}
              dogsId={dogsId}
              price={petSitter.ratePerNight * totalDays}
            />
          </>
        ))}
      </Row>
    </Col>
  );
};

export default CardPetSitter;
