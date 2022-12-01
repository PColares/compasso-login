import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 30vw;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundImage = styled.img`
  width: inherit;
`;

export const Logo = styled.img`
  position: absolute;
  width: 349px;
  height: 94px;

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  width: 70vw;
  height: 100vh;
  padding: 0rem 4rem 0;

  h1 {
    font-size: 60px;
    line-height: 90px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    color: #e0e0e0;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const ProfileComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 159px;
  background: #26292c;
  border: 1px solid #aaaaaa;
  border-radius: 8px;
`;

export const SearchInput = styled.div`
  display: flex;
  gap: 40px;
  input {
    width: 100%;
    padding-left: 2rem;
    background: #26292c;
    border: 1px solid #ffffff;
    color: #fff;
    border-radius: 50px;
  }
  button {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    width: 200px;

    background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  gap: 1rem;

  button {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    min-width: 150px;
    color: #ffffff;
    background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
`;

export const Img = styled.img`
  width: 93px;
  height: 93px;
  border-radius: 50px;

  background: #d9d9d9;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;

  h3 {
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    color: #8d8d8d;
  }
`;
