import styled from "styled-components";

export const Container = styled.div``;

export const BodyTextWrapper = styled.div`
  margin-right: 8rem;
  margin-top: 12rem;
  h1 {
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    text-align: right;
    line-height: 96px;
    color: #c12d18;
  }

  h2 {
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: right;
    line-height: 36px;
    color: #222222;
  }

  h3 {
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    text-align: right;
    line-height: 54px;
    color: #c12d18;
  }
`;

export const UolBall = styled.img`
  position: absolute;
  width: 800px;
  height: 800px;
  left: -5rem;
  bottom: 0;
  z-index: -1;
`;

export const FooterWrapper = styled.div`
  display: flex;
  height: 100px;
  color: #fff;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  z-index: 100;
  bottom: 0;
  position: absolute;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  justify-content: flex-end;

  h1 {
    display: flex;
    align-items: center;
    width: 33rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
  }
`;

export const Divider = styled.div`
  border: 1px solid #ffffff;
  transform: rotate(180deg);
  /* margin: 1.5rem 7.5rem 1.5rem 2rem; */
  margin: 1.5rem;
`;

export const RefreshWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* margin-right: 23rem; */
  margin-right: 1.5rem;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: right;

    color: #ffffff;
  }
`;

export const SecondsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 28px;

    color: #ffffff;
  }

  small {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #ffffff;
  }
`;

// Criar Variação light e dark do botão de logout e Acessar busca
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  border-radius: 0;

  color: #ffffff;
`;

export const SearchButton = styled(LogoutButton)`
  background: #fff;

  span {
    white-space: word;
    word-wrap: break-word;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #c13216;
  }
`;
