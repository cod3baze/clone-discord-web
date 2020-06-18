import React from "react";
// "STYLUS"
import { Container, Role, Avatar, User } from "./styles";

export interface UserPorps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserPorps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UerList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível -1</Role>
      <UserRow nickname="Elias Alexandre" />

      <Role>Onlines - 1</Role>
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
      <UserRow isBot={true} nickname="Elias garcia alexandre" />
    </Container>
  );
};

export default UerList;
