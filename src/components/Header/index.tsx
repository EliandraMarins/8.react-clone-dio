import React from "react";
import logo from '../../assets/logo.png'

import {
  Container,
  Row,
  Wrapper,
  SearchInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture,
} from "./styles";

import { Button } from "../Button";
import { IHeader } from "./types";

const Header = ({ authenticated }: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          { <img src={logo} alt="Logo da dio" />}
          {authenticated ? (
            <>
              <SearchInputContainer>
                <Input placeholder="Buscar..." />
              </SearchInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {authenticated ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/65451469?v=4"/>
          ) : (
          <>
            <MenuRight href="#">Home</MenuRight>
            <Button title="Entrar"></Button>
            <Button title="Cadastrar"></Button>
          </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
