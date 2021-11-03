import React from "react";
import {
  Container,
  Header,
  PlayerStatusBox,
  PlayerInfoBox,
  NextPage,
  CoinsLifeBox,
  Coins,
  Life,
  CoinIcon,
  LifeIcon,
  ApprenticeshipBox,
  Title,
  InfoStatus,
  InfoIcon,
  InfoStatusBox,
  MenuOptionsBox,
  MenuOptions,
  MenuOption,
  YourDataIcon,
  OtherPlayersIcon,
  EarnCoinsIcon,
  EarnLifeIcon,
  ChangeBonusIcon,
} from "./Player";
import PlayerStatus from "../../components/PlayerStatus";
import { playersData } from "../../playersData";
const Player = () => {
  const playerLoged = 1;
  const player = playersData[playerLoged];
  return (
    <Container>
      <Header>
        <NextPage />
        <PlayerInfoBox>
          <h1>{player.name}</h1>
          <h2>{player.email}</h2>
        </PlayerInfoBox>
        <PlayerStatusBox>
          <PlayerStatus />
        </PlayerStatusBox>
      </Header>
      <CoinsLifeBox>
        <Coins>
          <CoinIcon />
          {player.coins}
        </Coins>
        <Life>
          <LifeIcon />
          {player.life}
        </Life>
      </CoinsLifeBox>
      <ApprenticeshipBox>
        <Title>seu aprendizado</Title>
        <InfoStatusBox>
          <InfoStatus>
            <InfoIcon Color={"#002529"} />
            pontos
          </InfoStatus>
          <InfoStatus>
            <InfoIcon Color={"#01414a"} />
            aprendizado
          </InfoStatus>
          <InfoStatus>
            <InfoIcon Color={"#066671"} />
            frequencia
          </InfoStatus>
        </InfoStatusBox>
        <Title>menu</Title>
      </ApprenticeshipBox>
      <MenuOptionsBox>
        <MenuOptions>
          <MenuOption to="#">
            <YourDataIcon />
            seus dados
          </MenuOption>
          <MenuOption to="playerPlayers">
            <OtherPlayersIcon />
            outros jogadores
          </MenuOption>
          <MenuOption to="#">
            <EarnCoinsIcon />
            como ganhar pontos
          </MenuOption>
          <MenuOption to="#">
            <EarnLifeIcon />
            como ganhar vidas
          </MenuOption>
          <MenuOption to="#">
            <ChangeBonusIcon />
            como trocar bonus
            <p>Lorem ipsum dolor sit sit amet,consetetur sadipscing elitr.</p>
          </MenuOption>
        </MenuOptions>
      </MenuOptionsBox>
    </Container>
  );
};

export default Player;
