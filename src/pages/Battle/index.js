import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Header,
  ReturnPage,
  BattleBox,
  PlayerImageBox,
  VersusIconBox,
  FriendImageBox,
  Stopwatch,
  NeedLearnBox,
  NeedLearnIcon,
  BattleContent,
  CheckboxBox,
  ButtonBox,
} from "./Battle";

import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";
import versusIcon from "../../images/versusIcon.png";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { playersData } from "../../playersData";

const Index = () => {
  const { id } = useParams();
  const playerLoged = 0;
  const player = playersData[playerLoged];
  const friend = playersData[playerLoged].friends[id];
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  function disabledButton() {
    if (checkbox1 || checkbox2) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <Container>
      <div>
        <Header>
          <ReturnPage to="/" aria-label="return page button">
            <ArrowLeftShort />
          </ReturnPage>
          <h1>Batalha</h1>
          <BattleBox>
            <PlayerImageBox>
              <img src={player.profileImage} alt="imagem do jogador" />
            </PlayerImageBox>
            <VersusIconBox>
              <img src={versusIcon} alt="X " />
            </VersusIconBox>
            <FriendImageBox>
              <img src={friend.profileImage} alt="imagem do amigo" />
            </FriendImageBox>
          </BattleBox>
          <Stopwatch>00:00</Stopwatch>
        </Header>
        <NeedLearnBox>
          <NeedLearnIcon />
          <span>preciso aprender</span>
        </NeedLearnBox>
        <BattleContent>
          <CheckboxBox>
            <p>Lorem ipsum dolor sit amet, consetesed diam nonu.</p>
            <Checkbox
              Name="checkbox"
              Id="checkbox1"
              OnClick={() => setCheckbox1(!checkbox1)}
            />
          </CheckboxBox>
          <CheckboxBox>
            <p>
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam
              nonu
            </p>
            <Checkbox
              Name="checkbox"
              Id="checkbox2"
              OnClick={() => setCheckbox2(!checkbox2)}
            />
          </CheckboxBox>
          <ButtonBox>
            <Button
              Disabled={disabledButton()}
              OnClick={() => disabledButton()}
            >
              próxima
            </Button>
          </ButtonBox>
        </BattleContent>
      </div>
    </Container>
  );
};

export default Index;
