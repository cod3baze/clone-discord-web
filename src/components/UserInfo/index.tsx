import React from "react";
// "STYLUS"
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcons,
  SettingsIcon,
} from "./styles";

const ServerName: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Elias alexandre</strong>
          <span>#51605</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcons />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default ServerName;
