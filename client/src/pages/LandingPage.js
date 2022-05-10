import React from "react";
import { Container } from "react-bootstrap";
import SignUpBlock from "../components/SignUpBlock";
import AboutUsBlock from "../components/AboutUsBlock";
import ApplicationStepsBlock from "../components/ApplicationStepsBlock";
import BenefitsBlock from "../components/BenefitsBlock";
import ContactUsBlock from "../components/ContactUsBlock";

const LandingPage = () => {
  return (
    <Container fluid>
      {/* SIGN UP BLOCK */}
      <SignUpBlock />
      {/* ABOUT US BLOCK */}
      <AboutUsBlock />
      {/* APPLICATION STEPS BLOCK */}
      <ApplicationStepsBlock />
      {/* BENEFITS BLOCK */}
      <BenefitsBlock />
      {/* CONTACT US BLOCK */}
      <ContactUsBlock />
    </Container>
  );
};
export default LandingPage;
