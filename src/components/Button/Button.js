import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  text-align: center;
  background: #355c26;
  border: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  padding: 12px 0;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s;
  &:disabled {
    background: #e2e2e2;
    cursor: default;
  }
`;
