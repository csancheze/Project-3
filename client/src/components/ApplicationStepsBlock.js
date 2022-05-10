import React from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import AppFunctionality from "../images/AppFunctionality.jpeg";
import PlanYourTripIcon from "../images/PlanYourTripIcon.png";
import ReservationIcon from "../images/ReservationIcon.png";
import FindPetSitterIcon from "../images/FindPetSitterIcon.png";
import SignUpIcon from "../images/SignUpIcon.png";
import "../styles/applicationStepsBlock.css";

const ApplicationStepsBlock = () => {
  return (
    <Row className="container-application-steps-block">
      <Col sm>
        <div className="container-application-steps-block__flex">
          <Image
            src={AppFunctionality}
            className="container-application-steps-block__flex-image"
            rounded
          />
        </div>
      </Col>
      <Col sm>
        <Row>
          <Col className="container-application-steps-block__steps" sm>
            <Card>
              <Card.Body>
                <Card.Title className="container-application-steps-block__steps-title">
                  <Card.Img
                    src={SignUpIcon}
                    className="container-application-steps-block__steps-icon"
                  />
                </Card.Title>
                <Card.Subtitle className="container-application-steps-block__steps-subtitle">
                  Sign in
                </Card.Subtitle>
                <Card.Text className="container-application-steps-block__steps-text">
                  Sing in / Log In into our application, add your personal
                  information and tell us about your fur best friend(s).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="container-application-steps-block__steps">
            <Card>
              <Card.Body>
                <Card.Title className="container-application-steps-block__steps-title">
                  <Card.Img
                    src={PlanYourTripIcon}
                    className="container-application-steps-block__steps-icon"
                  />
                </Card.Title>
                <Card.Subtitle className="container-application-steps-block__steps-subtitle">
                  Schedule
                </Card.Subtitle>
                <Card.Text className="container-application-steps-block__steps-text">
                  Plan your trip, select your fur best friend, add when you are
                  leaving and when you return and look for the best caretaker.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="container-application-steps-block__steps" sm>
            <Card>
              <Card.Body>
                <Card.Title className="container-application-steps-block__steps-title">
                  <Card.Img
                    src={FindPetSitterIcon}
                    className="container-application-steps-block__steps-icon"
                  />
                </Card.Title>
                <Card.Subtitle className="container-application-steps-block__steps-subtitle">
                  Find
                </Card.Subtitle>
                <Card.Text className="container-application-steps-block__steps-text">
                  In our catalog, find the best Pet Sitter available. Check all
                  their information to make sure is the best option for you and
                  your fur best friend.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="container-application-steps-block__steps">
            <Card>
              <Card.Body>
                <Card.Title className="container-application-steps-block__steps-title">
                  <Card.Img
                    src={ReservationIcon}
                    className="container-application-steps-block__steps-icon"
                  />
                </Card.Title>
                <Card.Subtitle className="container-application-steps-block__steps-subtitle">
                  reservation
                </Card.Subtitle>
                <Card.Text className="container-application-steps-block__steps-text">
                  When the Pet Sitter accepts your reservation, its time to take
                  a break with the guarantee that your fur best friend is in the
                  best hands :).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ApplicationStepsBlock;
