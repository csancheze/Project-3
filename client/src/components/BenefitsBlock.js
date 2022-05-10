import React from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import HomeWellBeing from "../images/HomeWellBeing.png";
import LookPetSitter from "../images/LookPetSitter.png";
import VetSupport from "../images/VetSupport.png";
import CoverageSupport from "../images/CoverageSupport.png";
import Benefits from "../images/Benefits.jpg";
import "../styles/benefitsBlock.css";

const BenefitsBlock = () => {
  return (
    <Row className="container-benefits-block">
      <Col sm>
        <div className="container-benefits-block__list">
          <h1 className="container-benefits-block__list-title">OUR BENEFITS</h1>
          <ListGroup>
            <ListGroup.Item id="container-benefits-block__list-item">
              <Image
                className="container-benefits-block__list-item-icon"
                src={HomeWellBeing}
              />
              The well-being of your pet is our priority.
            </ListGroup.Item>
            <ListGroup.Item id="container-benefits-block__list-item">
              <Image
                src={LookPetSitter}
                className="container-benefits-block__list-item-icon"
              />
              Peace of mind with every booking through photo and video updates.
            </ListGroup.Item>
            <ListGroup.Item id="container-benefits-block__list-item">
              <Image
                src={VetSupport}
                className="container-benefits-block__list-item-icon"
              />
              Veterinary coverage, and 24/7 customer support.
            </ListGroup.Item>
            <ListGroup.Item id="container-benefits-block__list-item">
              <Image
                src={CoverageSupport}
                className="container-benefits-block__list-item-icon"
              />
              Coverage against accidents, material damage and third parties
              included in each reservation.
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Col>
      <Col sm>
        <Image
          src={Benefits}
          className="container-benefits-block__image"
          roundedCircle
        />
      </Col>
    </Row>
  );
};

export default BenefitsBlock;
