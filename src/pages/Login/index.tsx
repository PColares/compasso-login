import React from "react";
import {
  Container,
  Image,
  LeftContainer,
  RightContainer,
  Logo,
  Title,
  Subtitle,
  Title2,
  Input,
  Button,
} from "./styles";
import img from "../../assets/image.jpg";
import logo from "../../assets/logo.png";

export function LoginPage() {
  return (
    <Container>
      <LeftContainer>
        <div
          style={{
            display:'flex',
            flexDirection: 'column',
            marginLeft: '-95px',
            marginBottom: "135px",
          }}
        >
          <Title>Olá,</Title>
          <Subtitle>
            Para continuar navegando de forma segura, efetue o login na rede.
          </Subtitle>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            marginBottom: "208px",
            marginTop: "25px",
          }}
        >
          <Title2>Login</Title2>
          <Input placeholder="Usuário"></Input>
          <Input placeholder="Senha"></Input>
        </div>
        <Button>Continuar</Button>
      </LeftContainer>
      <RightContainer>
        <Logo src={logo} />
        <Image src={img} />
      </RightContainer>
    </Container>
  );
}
