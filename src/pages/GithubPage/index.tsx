import React from "react";
import {
  Container,
  ProfileComponent,
  Info,
  ProfileContainer,
  SearchInput,
  Img,
  LeftContainer,
  RightContainer,
  BackgroundImage,
  Logo,
} from "./styles";
import UolBall from "../../assets/uol-ball.png";
import backgroundImg from "../../assets/image.jpg";
import logo from "../../assets/logo.png";

export function GithubPage() {
  return (
    <Container>
      <LeftContainer>
        <h1>Busca</h1>
        <p>Para encontrar o usuário desejado digite seu nome abaixo.</p>
        <SearchInput>
          <input type="text" placeholder="Ex.: Thauany" />
          <button>Buscar</button>
        </SearchInput>
        <ProfileComponent>
          <ProfileContainer>
            <Img src={UolBall} alt="github profile" />
            <Info>
              <h3>Nome</h3>
              <p>Descrição</p>
            </Info>
            <button>VER MAIS</button>
          </ProfileContainer>
        </ProfileComponent>
        <ProfileComponent>
          <ProfileContainer>
            <Img src={UolBall} alt="github profile" />
            <Info>
              <h3>Nome</h3>
              <p>Descrição</p>
            </Info>
            <button>VER MAIS</button>
          </ProfileContainer>
        </ProfileComponent>
        <ProfileComponent>
          <ProfileContainer>
            <Img src={UolBall} alt="github profile" />
            <Info>
              <h3>Nome</h3>
              <p>Descrição</p>
            </Info>
            <button>VER MAIS</button>
          </ProfileContainer>
        </ProfileComponent>
      </LeftContainer>

      <RightContainer>
        <Logo src={logo} />
        <BackgroundImage src={backgroundImg} />
      </RightContainer>
    </Container>
  );
}
