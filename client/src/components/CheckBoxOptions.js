import React from "react";
import { Col, Form } from "react-bootstrap";

const CheckBoxOptions = ({ title, data }) => {
  return (
    <Col xs="auto">
      {title}
      {data.map((value) => (
        <Form.Check
          type="checkbox"
          id={value._id}
          className="mb-2"
          label={value.name}
          value={value._id}
        />
      ))}
    </Col>
  );
};

export default CheckBoxOptions;
