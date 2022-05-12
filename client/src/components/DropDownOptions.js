import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const DropDownOptions = ({ title, data, setDog }) => {
  const [dogsName, setDogsName] = useState("");

  const clickButton = (e, data) => {
    const selected = e.target.innerText;
    setDogsName(selected);
    setDog(data);
  };

  return (
    <InputGroup className="mb-3">
      <DropdownButton
        variant="outline-secondary"
        title={title}
        id="input-group-dropdown-1"
      >
        {data.map((value) => (
          <Dropdown.Item
            onClick={(e) => clickButton(e, value)}
            key={value._id}
            value={value.name}
          >
            {value.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <FormControl defaultValue={dogsName} />
    </InputGroup>
  );
};

export default DropDownOptions;
