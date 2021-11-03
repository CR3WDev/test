import React from "react";
import { Container, CheckButton } from "./Checkbox";
const Index = (props) => {
  return (
    <Container>
      <input
        type="checkbox"
        name={props.Name}
        id={props.Id}
        onClick={props.OnClick}
      />
      <label htmlFor={props.Id}>
        <CheckButton></CheckButton>
      </label>
    </Container>
  );
};

export default Index;
