import styled from "styled-components";

import { Coin } from "@styled-icons/bootstrap/Coin";
import { Heart } from "@styled-icons/boxicons-regular/Heart";
import { Person } from "@styled-icons/fluentui-system-filled/Person";
import { PeopleTeam } from "@styled-icons/fluentui-system-filled/PeopleTeam";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { IceCream } from "@styled-icons/fa-solid/IceCream";
import { Link } from "react-router-dom";

import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const NextPage = styled(ArrowRightShort)`
  position: absolute;
  border: none;
  background: none;
  width: 40px;
  right: 10px;
  top: 30px;
  color: #066671;
  cursor: pointer;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #83d0de;
  font-family: "Roboto", sans-serif;
  h1 {
    margin-left: 10%;
    font-size: 22px;
    font-weight: 500;
    color: #066671;
  }
  h2 {
    margin-left: 10%;
    margin-top: 5px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: #3e96a2;
  }
`;
export const PlayerInfoBox = styled.div`
  margin: auto 0;
`;
export const PlayerStatusBox = styled.div`
  position: relative;
  top: 66.5px;
`;
export const CoinsLifeBox = styled.div`
  text-align: right;
  margin-top: 20px;
  width: 120px;
  margin-bottom: 10px;
  font-family: "Qahiri", sans-serif;
`;
export const Coins = styled.h3`
  color: #066671;
  font-size: 55px;
  line-height: 40px;
  font-weight: 300;
`;
export const Life = styled.h3`
  color: #066671;
  font-size: 45px;
  line-height: 30px;
  font-weight: 300;
`;
export const CoinIcon = styled(Coin)`
  width: 25px;
  color: #ffc200;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const LifeIcon = styled(Heart)`
  width: 25px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #ff5536;
`;
export const ApprenticeshipBox = styled.div`
  padding-top: 5px;
  border-top: 3.5px dotted #c9c9c9;
  width: 90%;
  margin-left: 5%;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
`;
export const Title = styled.h3`
  color: #7b7b7b;
  font-size: 12px;
  text-align: center;
  font-weight: 300;
`;
export const InfoStatus = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #808080;
  display: flex;
  margin-bottom: 10px;
`;
export const InfoIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 5px;
  margin-right: 20px;
  background: ${(props) => props.Color};
`;
export const InfoStatusBox = styled.div`
  padding-top: 15px;
  padding-bottom: 30px;
`;
export const MenuOptionsBox = styled.div`
  border-top: 3.5px dotted #c9c9c9;
  width: 90%;
  margin-top: 5px;
  margin-left: 5%;
  font-family: "Roboto", sans-serif;
`;
export const MenuOption = styled(Link)`
  padding: 10px 0;
  border-bottom: 3.5px dotted #c9c9c9;
  text-decoration: none;
  color: #515151;
  font-weight: 500;
  &:last-child {
    border: none;
  }
`;
export const MenuOptions = styled.div`
  padding-top: 15px;
  text-transform: uppercase;
  display: grid;
  p {
    font-weight: 300;
    text-transform: none;
    color: #b6b6b6;
    margin-left: 40px;
  }
`;
export const YourDataIcon = styled(Person)`
  width: 25px;
  margin-right: 10px;
  color: #152640;
`;
export const OtherPlayersIcon = styled(PeopleTeam)`
  width: 25px;
  margin-right: 10px;
  color: #4262a1;
`;
export const EarnCoinsIcon = styled(Coin)`
  width: 25px;
  margin-right: 10px;
  color: #ffc200;
`;
export const EarnLifeIcon = styled(HeartFill)`
  width: 25px;
  margin-right: 10px;
  color: #ff5536;
`;
export const ChangeBonusIcon = styled(IceCream)`
  width: 25px;
  margin-right: 10px;
  color: #ee748f;
`;
