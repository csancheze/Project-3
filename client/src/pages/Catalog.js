import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import CheckBoxOptions from "../components/CheckBoxOptions";
import { GET_SERVICES } from "../utils/queries";

const Catalog = () => {
  const { loading: loadingServices, data: dataServices } =
    useQuery(GET_SERVICES);

  // const { loading: loadingPetOwner, data: dataPetOwner } = useQuery(QUERY_ME_PETOWNER);
  // console.log(dataPetOwner)
  // const { loading: loadingPetSitters, data: dataPetSitters } = useQuery(SEARCH_PETSITTERS, {
  // variables: {
  //   services: ["3214234123","2342334"],
  //   // size: dataPetOwner.me.petOwner.pet.size._id,
  //   // health: dataPetOwner.me.petOwner.pet.health._id,
  //   // sociability: dataPetOwner.me.petOwner.pet.sociability._id,
  //   daysStart: "34255",
  //   daysEnd: "2345234523"
  // }
  // });
  // const petSittersResult = dataPetSitters || [];
  // console.log(petSittersResult);

  return (
    <Container fluid>
      <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Jane Doe"
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>

          <Col>
            <Row>
              {loadingServices ? (
                <div>Loading...</div>
              ) : (
                <CheckBoxOptions
                  title="Services"
                  data={dataServices.services}
                />
              )}
            </Row>
          </Col>
          <Col xs="auto">
            <Button type="submit" id="submit-button" className="mb-2">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default Catalog;
