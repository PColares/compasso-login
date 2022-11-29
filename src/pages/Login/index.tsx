import React, { useContext, useState } from "react";
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
  TitleWrapper,
  InputWrapper,
  ErrorWrapper,
  Form,
  Svg,
} from "./styles";
import img from "../../assets/image.jpg";
import logo from "../../assets/logo.png";
import iconUser from "../../assets/icon-user.svg";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const { width } = useWindowSize();
  const [form, setForm] = useState({ user: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form.user !== "admin" || form.password !== "admin") {
      setError("Ops, usuário ou senha inválidos. Tente novamente!");
      return;
    }
    navigate("/home");
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <LeftContainer>
        {width <= 768 && <Logo src={logo} />}
        <TitleWrapper>
          <Title>Olá,</Title>
          <Subtitle>
            Para continuar navegando de forma segura, efetue o login na rede.
          </Subtitle>
        </TitleWrapper>
        <Form>
          <InputWrapper>
            <Title2>Login</Title2>
            <Input
              type="text"
              name="user"
              onChange={handleChange}
              placeholder="Usuário"
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Senha"
            />
          </InputWrapper>
          {error ? (
            <ErrorWrapper>{error}</ErrorWrapper>
          ) : (
            <ErrorWrapper></ErrorWrapper>
          )}
          <Button type="submit" onClick={handleSubmit}>
            Continuar
          </Button>
        </Form>
      </LeftContainer>
      <RightContainer>
        <Logo src={logo} />
        <Image src={img} />
      </RightContainer>
    </Container>
  );
}
