import React from "react";
import {
  Container,
  Divider,
  Footer,
  FooterWrapper,
  LogoutButton,
  RefreshWrapper,
  SearchButton,
  SecondsWrapper,
  UolBall,
  BodyTextWrapper,
} from "./styles";
import uolBall from "../../assets/uol-ball.png";

export function HomePage() {
  return (
    <Container>
      <h1>Home</h1>
      <body>
        <UolBall src={uolBall} alt="" />
        <BodyTextWrapper>
          <h3>Our mission is</h3>
          <h2>Nossa missão é</h2>
          <h1>to transform the world</h1>
          <h2>transformar o mundo</h2>
          <h1>building digital experiences</h1>
          <h2>construindo experiências digitais</h2>
          <h1>that enable our client's growth</h1>
          <h2>que permitam o crescimento dos nossos clientes</h2>
        </BodyTextWrapper>
      </body>
      <FooterWrapper>
        <Footer>
          <h1>
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
            janela para continuar a navegar.
          </h1>
          <Divider />
          <RefreshWrapper>
            <span>Application refresh in</span>
            <SecondsWrapper>
              <span>600</span>
              <small>seconds</small>
            </SecondsWrapper>
          </RefreshWrapper>
          <SearchButton>
            <span>Acessar Busca</span>
          </SearchButton>
          <LogoutButton>logout</LogoutButton>
        </Footer>
      </FooterWrapper>
    </Container>
  );
}
