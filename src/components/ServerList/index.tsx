import React from "react";

import ServerButton from "../ServerButton";
import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton hasNotifications />
      <ServerButton mentions={35} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={334} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={233} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
