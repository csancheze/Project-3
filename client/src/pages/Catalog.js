import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { DateRangePicker } from "rsuite";
import { useQuery, useLazyQuery } from "@apollo/client";
import CheckBoxOptions from "../components/CheckBoxOptions";
import DropDownOptions from "../components/DropDownOptions";
import {
  GET_SERVICES,
  QUERY_ME_PETOWNER,
  SEARCH_PETSITTERS,
} from "../utils/queries";

const Catalog = () => {
  const [dog, setDog] = useState({});
  const [dates, setDates] = useState([]);
  const [services, setServices] = useState([]);

  const { loading: loadingServices, data: dataServices } =
    useQuery(GET_SERVICES);

  const { loading: loadingPetOwner, data: dataPetOwner } =
    useQuery(QUERY_ME_PETOWNER);

  const onChangeDaysOff = async (date) => {
    setDates(date);
  };

  const [getPetSitters, { loadingPetSitters, error, dataPetSitters }] =
    useLazyQuery(SEARCH_PETSITTERS);

  const OnFinish = (e) => {
    e.preventDefault();
    getPetSitters({
      variables: {
        services: services,
        size: dog?.size?._id,
        health: dog?.health?._id,
        sociability: dog?.sociability?._id,
        daysStart: dates[0],
        daysEnd: dates[1],
      },
    });
    console.log(loadingPetSitters);
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
      {loadingPetSitters ? (
        <div>Loading...</div>
      ) : (
        <p>{JSON.stringify(dataPetSitters)}</p>
      )}
    </Container>
  );
};
export default Catalog;
