import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div``;
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
export const Header = styled.header`
  width: 100%;
  background: #83d0de;
  font-family: "Roboto", sans-serif;
  padding-bottom: 10px;
`;
export const HeaderTitle = styled.h3`
  padding-top: 70px;
  margin-left: 40px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: #066671;
`;
export const HeaderSubTitle = styled.h3`
  margin-left: 40px;
  font-size: 16px;
  font-weight: normal;
  color: #3e96a2;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
`;
export const PlayerInfoBox = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  border-top: 3.5px dotted #66b7c5;
  justify-content: center;
  padding-top: 15px;
  h1 {
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 500;
    color: #066671;
  }
  h2 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #3e96a2;
  }
`;
export const PlayerImgBox = styled.div`
  margin-right: 10px;
  img {
    width: 60px;
    border-radius: 50%;
    border: 2.5px solid #066671;
  }
`;
export const PlayerFriendsText = styled.div`
  font-family: "Roboto", sans-serif;
  width: 90%;
  margin: auto;
`;
export const PlayerFriendsTitle = styled.h3`
  text-transform: uppercase;
  color: #555555;
  padding-bottom: 10px;
`;
export const PlayerFriendsSubTitle = styled.h3`
  font-weight: 300;
  font-size: 16px;
  padding: 30px 0;
`;
export const FriendsBox = styled.div`
  border-top: 3.5px dotted #c9c9c9;
  width: 90%;
  margin: auto;
  font-family: "Roboto", sans-serif;
`;
export const FriendBox = styled(Link)`
  display: flex;
  height: 100px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;
export const FriendImage = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  img {
    border-radius: 50%;
    width: 55px;
  }
`;
export const FriendName = styled.div`
  font-weight: 600;
  color: #333333;
`;
export const FriendText = styled.div`
  width: 50%;
  text-align: left;
`;
export const FriendContent = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: #4c4c4c;
`;
export const PlayerFriendsBox = styled.div`
  height: calc(100vh - 260px);
  overflow: auto;
`;
