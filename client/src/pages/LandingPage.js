import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "../styles/LandingPage.css";
import SignUpImage from "../images/SignUp.jpg";
import SignUpIcon from "../images/SignUpIcon.png";
import AboutUsImage from "../images/AboutUs.jpg";
import ValuesImage from "../images/Values.jpg";
import AppFunctionality from "../images/AppFunctionality.jpeg";
import PlanYourTripIcon from "../images/PlanYourTripIcon.png";
import FindPetSitterIcon from "../images/FindPetSitterIcon.png";
import ReservationIcon from "../images/ReservationIcon.png";

const LandingPage = () => {
  return (
    <Container
      style={{
        marginTop: "42px",
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
            <h1>Dogsbnb</h1>
            <h2>PETS MAKE GREAT COMPANIONS</h2>
            <p
              style={{
                fontStyle: "italic",
                lineHeight: "1.8",
                margin: "20px 1px 0",
                color: "white",
              }}
            >
              Sign up to look for a perfect Pet caretaker for your fur favortie
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
              }}
            >
              If you want to be a
              <span style={{ fontWeight: "700" }}> Pet Sitter </span>
              please
              <a> Sign Up </a>
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
            <h1>ABOUT US</h1>
            <p
              style={{
                lineHeight: "1.8",
                margin: "20px 1px 0",
                color: "white",
              }}
            >
              This is an application to find the best caretaker for your best
              fur friend. You can be sure that your pet is going to be in the
              best hands, because we provides you the guarantee of vet insurance
              for your pet and a health insurance for your caretaker in case an
              accident happends.
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

      <Row
        style={{
          borderColor: "black",
          borderStyle: "solid",
          padding: "4rem",
        }}
      >
        <Col sm>
          <div
            style={{
              backgroundColor: "rgb(218, 216, 217)",
            }}
          >
            <Image
              src={AppFunctionality}
              rounded
              style={{ height: "auto", width: "65%" }}
            />
          </div>
        </Col>
        <Col sm>
          <Row>
            <Col style={{ padding: "2rem" }} sm>
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
                        width: "25%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
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
                        width: "20%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm>
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
                        width: "25%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
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
                        width: "20%",
                        paddingLeft: "2rem",
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default LandingPage;
