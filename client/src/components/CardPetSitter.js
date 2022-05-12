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
  const [average, setAverage] = useState({})
  const [servicesOne, setServicesOne] = useState({})
  const [sizesOne, setSizesOne] = useState({})
  const [healthsOne, setHealthsOne] = useState({})
  const [socialOne, setSocialsOne] = useState({})

  const getAverage = (array) => {
    console.log(array)
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    console.log(avg)
    return avg
  }

  const simpleMap = (array) => {
    const newArray = array.map(element =>{
      return <ListGroupItem className="list-group-item h4 ">{element.name}</ListGroupItem>
    })

    return <ListGroup className="list-group-flush">{newArray}</ListGroup>
  }


  const handleClose = () => setShow(false);
  const handleShow = (e, petSitter) => {
    console.log(petSitter)
    setPetSitterSelect(petSitter);
    setShow(true);
    setAverage(getAverage(petSitter.ratings))
    setHealthsOne(simpleMap(petSitter.healthReady))
    setServicesOne(simpleMap(petSitter.services))
    setSizesOne(simpleMap(petSitter.sizes))
    setSocialsOne(simpleMap(petSitter.socialReady))
  };

  return (
    <Col md="auto">
      <Row>
        {data.map((petSitter) => (
          <>
            <Card
              key={petSitter._id}
              style={{ width: "18rem", margin: "2rem", backgroundColor: "#2cccc4", borderRadius: "20px", border: "0px" }}
            >
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{petSitter.name}</Card.Title>
                <Card.Text>$ {petSitter.ratePerNight} MXN Per Night</Card.Text>
                <Card.Text>
                  TOTAL $ {petSitter.ratePerNight * totalDays} MXN{" "}
                </Card.Text>
              </Card.Body>

              <Card.Subtitle>Services:</Card.Subtitle>
              <ListGroup className="list-group-flush">
                {petSitter.services.map((services) => (
                  <ListGroupItem>{services.name}</ListGroupItem>
                ))}
                <ListGroupItem style={{ backgroundColor: "#2cccc4" }} className="d-flex justify-content-center">
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
              ratings = {average}
              services ={servicesOne}
              sizes = {sizesOne}
              healths = {healthsOne}
              socials = {socialOne}

            />
          </>
        ))}
      </Row>
    </Col>
  );
};

export default CardPetSitter;
