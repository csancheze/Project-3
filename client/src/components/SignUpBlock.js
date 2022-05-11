import React from "react";
import { Row, Col, Image, Button, Card } from "react-bootstrap";
import LookPetSitter from "../images/LookPetSitter.png";
import SignUpImage from "../images/SignUp.jpg";
import "../styles/signUpBlock.css";
import { NavLink } from "react-router-dom";

const SignUpBlock = () => {
  return (
    <Row className="container-sign-up-block">
      <Col sm={12} md={12} lg={6} className="container-sign-up-block__col">
        <Image
          src={SignUpImage}
          rounded
          className="container-sing-up-block__col-image"
        />
      </Col>
      <Col sm={12} md={12} lg={6} style={{ backgroundColor: "#2cccc4" }}>
        <div className="container-sign-up-block__info">
          <h1 id="app-name" className="container-sign-up-block__info-title">
            <Image
              src={LookPetSitter}
              className="container-sign-up-block__info-icon"
            />{" "}
            Woofstel
          </h1>
          <h2 className="container-sign-up-block__info-subtitle">
            The kind of care your dogs deserve!
          </h2>
          <p className="container-sign-up-block__info-text">
            Sign up to look the perfect Pet Sitter match for your fur favorite
            member
          </p>
          <NavLink to="/signup-user"><Button id='submit-button' type="primary" htmlType="submit">
          Sign up
        </Button>
        </NavLink>
          <p className="container-sign-up-block__info-text">
            If you want to be a
            <span style={{ fontWeight: "700" }}> Pet Sitter </span>
            please
            <NavLink to="/signup-sitter"><Card.Link> Sign up</Card.Link></NavLink>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpBlock;
