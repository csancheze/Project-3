import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import "../styles/LandingPage.css";
import SignUpImage from "../images/SignUp.jpg";
import SignUpIcon from "../images/SignUpIcon.png";
import AboutUsImage from "../images/AboutUs.jpg";
import Benefits from "../images/Benefits.jpg";
import AppFunctionality from "../images/AppFunctionality.jpeg";
import PlanYourTripIcon from "../images/PlanYourTripIcon.png";
import FindPetSitterIcon from "../images/FindPetSitterIcon.png";
import ReservationIcon from "../images/ReservationIcon.png";
import HomeWellBeing from "../images/HomeWellBeing.png";
import LookPetSitter from "../images/LookPetSitter.png";
import VetSupport from "../images/VetSupport.png";
import CoverageSupport from "../images/CoverageSupport.png";
import ContactUsImage from "../images/ContactUs.jpeg";

const LandingPage = () => {
  return (
    <Container
      style={{
        marginTop: "42px",
        backgroundColor: "#FFFFF7",
      }}
      fluid
    >
      {/* SIGN UP CONTAINER */}
      <Row style={{ padding: "4rem" }}>
        <Col style={{ padding: "0px" }} sm>
          <Image
            src={SignUpImage}
            rounded
            style={{ height: "auto", maxWidth: "100%" }}
          />
        </Col>
        <Col style={{ backgroundColor: "#2cccc4" }} sm>
          <div className="container">
            <h1 className="title">
              <Image
                src={LookPetSitter}
                style={{
                  height: "auto",
                  width: "auto",
                  maxWidth: "25%",
                }}
              />{" "}
              Dogsbnb
            </h1>
            <h2 className="subtitle">The kind of care your dogs deserve!</h2>
            <p
              style={{
                fontStyle: "italic",
                lineHeight: "1.8",
                margin: "20px 1px 0",
                color: "white",
                fontSize: "1.75rem",
              }}
            >
              Sign up to look the perfect Pet Sitter match for your fur favortie
              member
            </p>
            <Button
              style={{
                borderStyle: "solid",
                fontSize: "1.125rem",
                letterSpacing: "1px",
                margin: "21px auto 0 0",
                borderColor: "black",
                backgroundColor: "#72efe9 ",
                fontWeight: "500",
                fontFamily: "Source Sans Pro, sans-serif ",
                color: "black",
              }}
            >
              SIGN UP
            </Button>
            <p
              style={{
                fontStyle: "italic",
                lineHeight: "1.8",
                margin: "19px 0 0",
                color: "white",
                fontSize: "1.25rem",
              }}
            >
              If you want to be a
              <span style={{ fontWeight: "700" }}> Pet Sitter </span>
              please
              <Card.Link> Sign Up </Card.Link>
            </p>
          </div>
        </Col>
      </Row>

      {/* ABOUT US CONTAINER */}
      <Row
        style={{
          backgroundColor: "#2cccc4",
        }}
      >
        <Col sm>
          <div className="container2">
            <h1 className="title">ABOUT US</h1>
            <p
              style={{
                lineHeight: "1.8",
                margin: "20px 1px 0",
                color: "white",
                fontSize: "1.75rem",
              }}
            >
              Our dogs are another member ofthe family, thats why their
              well-being is our priority. Find the best Pet Sitter according
              your needs. We have a wide range of expert Pet Sitters who will
              make your dog feel at home. Feel confident that your dog will be
              well cared and protected against any incident, since we guarantee
              in each session a vet insurance for your dog and a health
              insurance for your Pet Sitter in case an accident happends.
            </p>
          </div>
        </Col>
        <Col sm>
          <Image
            src={AboutUsImage}
            rounded
            style={{
              height: "auto",
              width: "75%",
              padding: "2rem",
            }}
            roundedCircle
          />
        </Col>
      </Row>

      {/* HOW TO USE THE APPLICATION CONTAINER */}
      <Row
        style={{
          padding: "4rem",
        }}
      >
        <Col sm>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              src={AppFunctionality}
              rounded
              style={{ height: "auto", width: "60%" }}
            />
          </div>
        </Col>
        <Col sm>
          <Row>
            <Col className="steps" sm>
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "2.75rem",
                    }}
                  >
                    #01
                    <Card.Img
                      src={SignUpIcon}
                      style={{
                        height: "auto",
                        width: "auto",
                        maxWidth: "45%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "1.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      paddingTop: "10px",
                    }}
                  >
                    Sign in
                  </Card.Subtitle>
                  <Card.Text style={{ paddingTop: "10px" }}>
                    Sing in to our application, add your personal information
                    and tell us about your fur best friend(s).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="steps">
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "2.75rem",
                    }}
                  >
                    #02
                    <Card.Img
                      src={PlanYourTripIcon}
                      style={{
                        height: "auto",
                        width: "auto",
                        maxWidth: "45%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "1.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      paddingTop: "10px",
                    }}
                  >
                    Schedule
                  </Card.Subtitle>
                  <Card.Text style={{ paddingTop: "10px" }}>
                    Plan your trip, select your fur best friend, add when you
                    are leaving and when you return and look for the best
                    caretaker.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="steps" sm>
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "2.75rem",
                    }}
                  >
                    #03
                    <Card.Img
                      src={FindPetSitterIcon}
                      style={{
                        height: "auto",
                        width: "auto",
                        maxWidth: "45%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "1.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      paddingTop: "10px",
                    }}
                  >
                    Find
                  </Card.Subtitle>
                  <Card.Text style={{ paddingTop: "10px" }}>
                    In our catalog, find the best Pet Sitter available. Check
                    all their information to make sure is the best option for
                    you and your fur best friend.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="steps">
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "2.75rem",
                    }}
                  >
                    #04
                    <Card.Img
                      src={ReservationIcon}
                      style={{
                        height: "auto",
                        width: "auto",
                        maxWidth: "45%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontSize: "1.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      paddingTop: "10px",
                    }}
                  >
                    Make a reservation
                  </Card.Subtitle>
                  <Card.Text style={{ paddingTop: "10px" }}>
                    When the Pet Sitter accepts your reservation, its time to
                    take a break with the guarantee that your fur best friend is
                    in the best hands :).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* BENEFITS CONTAINER */}
      <Row
        style={{
          backgroundColor: "#2cccc4",
          borderColor: "black",
          borderStyle: "solid",
        }}
      >
        <Col sm>
          <div style={{ padding: "2rem" }}>
            <h1 className="title">OUR BENEFITS</h1>
            <ListGroup>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2cccc4",
                  color: "white",
                  fontSize: "1rem",
                  letterSpacing: "2px",
                  padding: "1rem",
                  fontWeight: "700",
                }}
              >
                <Image
                  src={HomeWellBeing}
                  style={{
                    height: "auto",
                    width: "auto",
                    maxWidth: "10%",
                  }}
                />
                The well-being of your pet is our priority.
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2cccc4",
                  color: "white",
                  fontSize: "1rem",
                  letterSpacing: "2px",
                  padding: "1rem",
                  fontWeight: "700",
                }}
              >
                <Image
                  src={LookPetSitter}
                  style={{
                    height: "auto",
                    width: "auto",
                    maxWidth: "10%",
                  }}
                />
                Peace of mind with every booking through photo and video
                updates.
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2cccc4",
                  color: "white",
                  fontSize: "1rem",
                  letterSpacing: "2px",
                  padding: "1rem",
                  fontWeight: "700",
                }}
              >
                <Image
                  src={VetSupport}
                  style={{
                    height: "auto",
                    width: "auto",
                    maxWidth: "10%",
                  }}
                />
                Veterinary coverage, and 24/7 customer support.
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "#2cccc4",
                  color: "white",
                  fontSize: "1rem",
                  letterSpacing: "2px",
                  padding: "1rem",
                  fontWeight: "700",
                }}
              >
                <Image
                  src={CoverageSupport}
                  style={{
                    height: "auto",
                    width: "auto",
                    maxWidth: "10%",
                  }}
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
            rounded
            style={{
              height: "auto",
              width: "60%",
              margin: "3rem",
            }}
            roundedCircle
          />
        </Col>
      </Row>

      {/* CONTACT US*/}
      <Row style={{ padding: "4rem" }}>
        <Col style={{ padding: "0px" }} sm>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              src={ContactUsImage}
              rounded
              style={{ height: "auto", width: "50%" }}
            />
          </div>
        </Col>
        <Col sm>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="steps"
          >
            <h1
              style={{ backgroundColor: "#2cccc4", marginTop: "10px" }}
              className="title"
            >
              Contact Us
            </h1>
            <p
              style={{
                fontStyle: "italic",
                lineHeight: "1.8",
                margin: "20px 1px 0",
                color: "black",
                fontSize: "1.75rem",
              }}
            >
              Do you still have doubts or something you want to share with us?
              Please leave your message and our support team will contact you as
              soon as possible.
            </p>
            <Button
              style={{
                borderStyle: "solid",
                fontSize: "1.125rem",
                letterSpacing: "1px",
                margin: "21px auto 0 0",
                borderColor: "black",
                backgroundColor: "#72efe9 ",
                fontWeight: "500",
                fontFamily: "Source Sans Pro, sans-serif ",
                color: "black",
              }}
            >
              CONTACT US
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LandingPage;
