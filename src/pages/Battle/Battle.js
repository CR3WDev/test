import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlashOn } from "@styled-icons/material-twotone/FlashOn";

export const Container = styled.div``;
export const Header = styled.header`
  width: 100%;
  padding-top: 70px;
  padding-bottom: 10px;
  background: #83d0de;
  font-family: "Urbanist", sans-serif;

  h1 {
    font-size: 22px;
    color: #066671;
    text-transform: uppercase;
    text-align: center;
  }
`;
export const ReturnPage = styled(Link)`
  position: absolute;
  border: none;
  background: none;
  width: 40px;
  left: 10px;
  top: 30px;
  color: #066671;
  cursor: pointer;
`;
export const BattleBox = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 3.5px dotted #24808c;
`;
export const PlayerImageBox = styled.div`
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 5px solid #078bb2;
  }
`;
export const VersusIconBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`;
export const FriendImageBox = styled.div`
  margin: auto 0;
  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 5px solid #078bb2;
  }
`;
export const Stopwatch = styled.h2`
  width: 100%;
  text-align: center;
  font-family: "Qahiri", sans-serif;
  font-weight: 300;
  font-size: 120px;
  line-height: 100px;
  color: #066671;
`;
export const NeedLearnBox = styled.div`
  width: 90%;
  padding-top: 30px;
  padding-bottom: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  border-bottom: 3.5px dotted #c9c9c9;

  span {
    color: #545454;
    display: flex;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const NeedLearnIcon = styled(FlashOn)`
  color: #1fbccd;
  width: 40px;
`;
export const BattleContent = styled.div`
  width: 90%;
  margin: auto;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;
export const CheckboxBox = styled.label`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  p {
    width: 200px;
    font-size: 16px;
    font-weight: 300;
    color: #545454;
  }
`;
export const ButtonBox = styled.div`
  margin-top: 50px;
`;
