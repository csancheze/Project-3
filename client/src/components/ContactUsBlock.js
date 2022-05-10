import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import ContactUsImage from "../images/ContactUs.jpeg";
import "../styles/contactUsBlock.css";

const ContactUsBlock = () => {
  return (
    <Row className="container-contact-us-block">
      <Col className="container-contact-us-block__column" sm>
        <div className="container-contact-us-block__column-flex">
          <Image
            className="container-contact-us-block__column-flex-image"
            src={ContactUsImage}
            rounded
          />
        </div>
      </Col>
      <Col sm>
        <div className="container-contact-us-block__column-flex-info">
          <h1 className="container-contact-us-block__column-flex-title">
            Contact Us
          </h1>
          <p className="container-contact-us-block__column-flex-text">
            Do you still have doubts or something you want to share with us?
            Please leave your message and our support team will contact you as
            soon as possible.
          </p>
          <Button id="submit-button">CONTACT US</Button>
        </div>
      </Col>
    </Row>
  );
};

export default ContactUsBlock;
