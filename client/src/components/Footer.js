import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container className="text-center pt-5 d-flex justify-content-center">
        <Row className="w-75">
          <Col sm={12} md={6} lg={3} className="pb-3">
            <h5 className="title">About us</h5>
            <p>
            Dogsbnb is a service of petsitter in Mexico so you don't have to worry about where to leave your Dog when you travel.
            </p>
          </Col>
          <Col sm={12} md={6} lg={3} className="pb-3">
          <h5 className="title">Our Values</h5>
          <ul className="p-0">
            <li className="list-unstyled">
              Responsibility
            </li>
            <li className="list-unstyled">
              Compassion
            </li>
            <li className="list-unstyled">
              Honesty
            </li>
          </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="pb-3">
          <h5 className="title">Contact us</h5>
            <p>Offices: Calle Lago Zurich Piso 11, Ampliación Granada, Mexico City, CDMX</p>
            <NavLink id="message" to="/contact"> Send us a message <i class="bi bi-chat-dots-fill"></i></NavLink>
          </Col>
          <Col sm={12} md={6} lg={3} className="pb-3">
            <h5 className="title">Links</h5>
            <ul className="p-0">
              <li className="list-unstyled">
                <a href="#!">FAQS</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Insurance Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="www.youtube.com">Videos</a>
              </li>
              <li className="list-unstyled">
                <a href="www.twitter.com">Twitter</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
          &copy; {new Date().getFullYear()} Copyright: All rights reserved®
      </div>
      </div>
  );
}

export default Footer;