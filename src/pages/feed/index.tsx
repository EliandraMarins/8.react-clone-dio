import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import React from "react";

import { Column, Container, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={90}
            name="Eli"
            image="https://avatars.githubusercontent.com/u/65451469?v=4"
          />
          <UserInfo
            percentual={65}
            name="Eli"
            image="https://avatars.githubusercontent.com/u/65451469?v=4"
          />
          <UserInfo
            percentual={45}
            name="Eli"
            image="https://avatars.githubusercontent.com/u/65451469?v=4"
          />
          <UserInfo
            percentual={20}
            name="Eli"
            image="https://avatars.githubusercontent.com/u/65451469?v=4"
          />
          <UserInfo
            percentual={10}
            name="Eli"
            image="https://avatars.githubusercontent.com/u/65451469?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
