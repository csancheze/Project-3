import React from "react";
import { Col, Form } from "react-bootstrap";

const CheckBoxOptions = ({ title, data, setServices }) => {
  const removeService = (arr, remove) => {
    if (arr.length > 0) {
      return arr.filter((item) => item !== remove);
    }
    return [];
  };
  const handleCheckbox = (e, data) => {
    setServices((prevState) =>
      e.target.checked ? [...prevState, data] : removeService(prevState, data)
    );
  };

  return (
    <Col xs="auto">
      {title}
      {data.map((value) => (
        <Form.Check type="checkbox" key={value._id}>
          <Form.Check.Input
            type="checkbox"
            defaultChecked={false}
            onClick={(e) => {
              handleCheckbox(e, value._id);
            }}
          />
          <Form.Check.Label>{value.name}</Form.Check.Label>
        </Form.Check>
      ))}
    </Col>
  );
};

export default CheckBoxOptions;
