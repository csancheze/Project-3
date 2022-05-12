import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { DateRangePicker } from "rsuite";
import { useQuery, useMutation } from "@apollo/client";
import CheckBoxOptions from "../components/CheckboxOptions";
import DropDownOptions from "../components/DropDownOptions";
import { GET_SERVICES, QUERY_ME_PETOWNER } from "../utils/queries";
import { SEARCH_PETSITTERS } from "../utils/mutations";
import CardPetSitter from "../components/CardPetSitter";
import "../styles/profile.css";

const Catalog = () => {
  const [dog, setDog] = useState({});
  const [dates, setDates] = useState([]);
  const [services, setServices] = useState([]);
  const [petSitter, setPetSitter] = useState({});
  const [totalDays, setTotalDays] = useState(0);
  const [petOwnerId, setPetOwnerId] = useState("");
  const [daysOfEvent, setDaysOfEvent] = useState("");

  const { loading: loadingServices, data: dataServices } =
    useQuery(GET_SERVICES);

  const { loading: loadingPetOwner, data: dataPetOwner } =
    useQuery(QUERY_ME_PETOWNER);

  const onChangeDaysOff = async (date) => {
    setDates(date);
  };

  const [searchPetSitter, { error }] = useMutation(SEARCH_PETSITTERS);

  const calculateDates = (day1, day2) => {
    const date1 = new Date(day1);
    const date2 = new Date(day2);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    setTotalDays(Difference_In_Time / (1000 * 3600 * 24));
  };

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
      calculateDates(dates[0], dates[1]);
      setPetOwnerId(dataPetOwner.me.petOwner._id);
      setDaysOfEvent(dates.toString());
    } catch (e) {
      alert("Failed to fetch petsitter!");
      console.error(e, error);
    }
  };
  return (
    <Container fluid id="search-bar">
      <Form
        name="basic"
        className="d-flex justify-content-around p-4 text-center"
      >
        <Row className="border border-3 rounded p-3">
          <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
            {loadingPetOwner ? (
              <div>Loading...</div>
            ) : (
              <>
                <Row className="d-flex justify-content-around">
                  Select your pet:
                </Row>
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

          <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
            <Row className="d-flex justify-content-center">
              {loadingServices ? (
                <div>Loading...</div>
              ) : (
                <CheckBoxOptions
                  title="Services:"
                  data={dataServices.services}
                  setServices={setServices}
                />
              )}
            </Row>
          </Col>

          <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
            <Row className="d-flex justify-content-around">
              Select your dates:
            </Row>
            <Row>
              <DateRangePicker onOk={onChangeDaysOff} />
            </Row>
          </Col>

          <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
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

      {Object.keys(petSitter).length > 0 ? (
        <Row>
          <CardPetSitter
            data={petSitter.data.petSitters}
            totalDays={totalDays}
            petOwnerId={petOwnerId}
            daysOfEvent={daysOfEvent}
            dogsId={dog._id}
            id="search-card"
          />
        </Row>
      ) : (
        <h1 className="d-flex justify-content-around">No Pet Sitters</h1>
      )}
    </Container>
  );
};
export default Catalog;
