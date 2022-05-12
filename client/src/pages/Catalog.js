import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { DateRangePicker } from "rsuite";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import CheckBoxOptions from "../components/CheckboxOptions";
import DropDownOptions from "../components/DropDownOptions";
import { GET_SERVICES, QUERY_ME_PETOWNER } from "../utils/queries";
import { SEARCH_PETSITTERS } from "../utils/mutations";

const Catalog = () => {
  const [dog, setDog] = useState({});
  const [dates, setDates] = useState([]);
  const [services, setServices] = useState([]);
  const [petSitter, setPetSitter] = useState({});

  const { loading: loadingServices, data: dataServices } =
    useQuery(GET_SERVICES);

  const { loading: loadingPetOwner, data: dataPetOwner } =
    useQuery(QUERY_ME_PETOWNER);

  const onChangeDaysOff = async (date) => {
    setDates(date);
  };

  const [searchPetSitter, { error }] = useMutation(SEARCH_PETSITTERS);

  const OnFinish = async (e) => {
    e.preventDefault();
    try {
      const dataPetSitter = await searchPetSitter({
        variables: {
          services: services,
          size: dog?.size?._id,
          health: dog?.health?._id,
          sociability: dog?.sociability?._id,
          daysStart: dates[0],
          daysEnd: dates[1],
        },
      });
      setPetSitter(dataPetSitter);
    } catch (e) {
      alert("Failed to fetch petsitter!");
      console.error(e, error);
    }
  };

  // import {createContext} from "react"
  // const reservationContext = createContext(dataAddEvent);
  //export const {Provider, Consumer} = CounterContext;

  // export default reservationContext;
  // add in context mutation AddEvent($petOwner: ID!, $petSitter: ID!, $daysOfEvent: String!, $pets: [ID!], $price: Float)
  return (
    <Container fluid>
      <Form name="basic" className="form">
        <Row className="align-items-center">
          <Col xs="auto">
            {loadingPetOwner ? (
              <div>Loading...</div>
            ) : (
              <>
                <Row>Select your pet:</Row>
                <Row>
                  <DropDownOptions
                    title="Dog"
                    data={dataPetOwner.me.petOwner.petsOwned}
                    setDog={setDog}
                  />
                </Row>
              </>
            )}
          </Col>

          <Col xs="auto">
            <Row>
              {loadingServices ? (
                <div>Loading...</div>
              ) : (
                <CheckBoxOptions
                  title="Services"
                  data={dataServices.services}
                  setServices={setServices}
                />
              )}
            </Row>
          </Col>

          <Col xs="auto">
            <Row>Select your Days off:</Row>
            <Row>
              <DateRangePicker onOk={onChangeDaysOff} />
            </Row>
          </Col>

          <Col xs="auto">
            <Button
              type="submit"
              id="submit-button"
              onClick={OnFinish}
              className="mb-2"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      {petSitter ? <p>{JSON.stringify(petSitter)}</p> : <br />}
    </Container>
  );
};
export default Catalog;
