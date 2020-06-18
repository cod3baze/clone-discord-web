import React from "react";
// "STYLUS"
import {
  Container,
  HashTagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />

      <Title>Chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
