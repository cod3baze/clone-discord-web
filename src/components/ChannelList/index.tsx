import React from "react";
// "COMPONENTS"
import ChannelButton from "../ChannelButton";
// "STYLUS"
import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>

        <AddCategoryIcon />
      </Category>

      <ChannelButton selected={true} channelName="Chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="Clash-of-clans" />
      <ChannelButton channelName="Clash-royale" />
      <ChannelButton channelName="GTA5" />
    </Container>
  );
};

export default ChannelList;
