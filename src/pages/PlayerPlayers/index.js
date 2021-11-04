import React from "react";
import { playersData } from "../../playersData";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";
import {
  Container,
  ReturnPage,
  Header,
  PlayerInfoBox,
  HeaderTitle,
  HeaderSubTitle,
  PlayerImgBox,
  PlayerFriendsText,
  PlayerFriendsTitle,
  PlayerFriendsSubTitle,
  FriendsBox,
  FriendBox,
  FriendImage,
  FriendText,
  FriendName,
  FriendContent,
  PlayerFriendsBox,
} from "./PlayerPlayers";
const Index = () => {
  const playerLoged = 0;
  const player = playersData[playerLoged];

  return (
    <Container>
      <Header>
        <ReturnPage to="/">
          <ArrowLeftShort />
        </ReturnPage>
        <HeaderTitle>outros jogadores</HeaderTitle>
        <HeaderSubTitle>
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonu.
        </HeaderSubTitle>
        <PlayerInfoBox>
          <PlayerImgBox>
            <img src={player.profileImage} alt={player.name} />
          </PlayerImgBox>
          <div>
            <h1>{player.name}</h1>
            <h2>{player.email}</h2>
          </div>
        </PlayerInfoBox>
      </Header>
      <PlayerFriendsBox>
        <PlayerFriendsText>
          <PlayerFriendsSubTitle>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr,sed diam
            nonu.
          </PlayerFriendsSubTitle>
          <PlayerFriendsTitle>escolha para batalhar</PlayerFriendsTitle>
        </PlayerFriendsText>
        <FriendsBox>
          {player.friends.map((friend, index) => (
            <FriendBox key={index} to={"player/friend/" + index}>
              <FriendImage>
                <img src={friend.profileImage} alt={`friend`}></img>
              </FriendImage>
              <FriendText>
                <FriendName>{friend.name}</FriendName>
                <FriendContent>{friend.content}</FriendContent>
              </FriendText>
            </FriendBox>
          ))}
        </FriendsBox>
      </PlayerFriendsBox>
    </Container>
  );
};

export default Index;
