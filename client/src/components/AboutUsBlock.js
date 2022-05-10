import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import AboutUsImage from "../images/AboutUs.jpg";
import "../styles/aboutUsBlock.css";

const AboutUsBlock = () => {
  return (
    <Row className="container-aboout-us-block">
      <Col sm>
        <div className="container-aboout-us-block__info">
          <h1 className="container-aboout-us-block__info-title">ABOUT US</h1>
          <p className="container-aboout-us-block__info-text">
            Our dogs are another member of the family, thats why their
            well-being is our priority. Find the best Pet Sitter according your
            needs. We have a wide range of experts who will take care of your
            dog and be protected against any incident, since we guarantee in
            each session a veterinary insurance and a health insurance for your
            Pet Sitter in case an accident happends.
          </p>
        </div>
      </Col>
      <Col sm>
        <Image
          src={AboutUsImage}
          className="container-aboout-us-block__image"
          roundedCircle
        />
      </Col>
    </Row>
  );
};

export default AboutUsBlock;
