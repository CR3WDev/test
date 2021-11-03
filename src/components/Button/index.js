import React from "react";
import { Container } from "./Button";
const Index = (props) => {
  return (
    <Container onClick={props.OnClick} disabled={props.Disabled}>
      {props.children}
    </Container>
  );
};

export default Index;
