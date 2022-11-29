import React, { useContext, useEffect, useRef, useState } from "react";
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
  Logo,
  MiddleWrapper,
  HeaderRight,
  HeaderRightChild,
} from "./styles";
import uolBall from "../../assets/uol-ball.png";
import logoBlack from "../../assets/logo-black.png";
import cloud from "../../assets/cloud.png";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  // @ts-ignore
  let maxSeconds = 600;
  let refStatus = useRef();
  const [counter, setCounter] = useState(maxSeconds);
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const date = new Date();
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: ("0" + date.getMinutes()).slice(-2),
  });
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const dayName = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  const monName = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const displayDate =
    dayName[date.getDay()] +
    ", " +
    date.getDate() +
    " de " +
    monName[date.getMonth()] +
    " de " +
    date.getFullYear();

  const handleLogout = () => {
    navigate("/");
  };

  const fetchData = async () => {
    await fetch(
      // @ts-ignore
      `http://api.weatherapi.com/v1/current.json?key=91d0c33bbe064dc3bd0143610222306&q=Belém&aqi=no`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setLocation(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter === 0) {
      navigate("/");
    }
  }, [counter]);

  useEffect(() => {}, [counter]);

  return (
    <Container>
      <header>
        <Logo src={logoBlack} alt="" />
        <MiddleWrapper>
          <span>
            {dateTime.hours}:{dateTime.minutes}
          </span>
          <p>{displayDate}</p>
        </MiddleWrapper>
        {location && data && (
          <HeaderRight>
            <span>
              {/* @ts-ignore */}
              {data.location.name} - {data.location.region}
            </span>
            <HeaderRightChild>
              <img src={cloud} alt="" />
              {/* @ts-ignore */}
              <span>{location.current.temp_c}º</span>
            </HeaderRightChild>
          </HeaderRight>
        )}
      </header>
      <section>
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
      </section>
      <FooterWrapper>
        <Footer>
          {width > 768 && (
            <>
              <h1>
                Essa janela do navegador é usada para manter sua sessão de
                autenticação ativa. Deixe-a aberta em segundo plano e abra uma
                nova janela para continuar a navegar.
              </h1>
              <Divider />
              <RefreshWrapper>
                <span>Application refresh in</span>
                <SecondsWrapper>
                  <span>{counter}</span>
                  <small>seconds</small>
                </SecondsWrapper>
              </RefreshWrapper>
            </>
          )}
          <SearchButton>
            <span>Acessar Busca</span>
          </SearchButton>
          <LogoutButton onClick={handleLogout}>logout</LogoutButton>
        </Footer>
      </FooterWrapper>
    </Container>
  );
}
