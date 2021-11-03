import styled from "styled-components";
import { Check } from "@styled-icons/bootstrap/Check";

export const Container = styled.div`
  input {
    opacity: 0;
    position: fixed;
    width: 0;
    transition: 0.5s;
  }
  label {
    display: inline-block;
    border: 4px solid #a1a1a1;
    background: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  input:checked + label {
    background-color: #355c26;
    border-color: #355c26;
  }
`;
export const CheckButton = styled(Check)`
  width: 100%;
  height: 100%;
  color: #fff;
`;
