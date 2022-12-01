import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* width: 1920px;
  height: 1080px; */
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  color: white;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;

  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ErrorWrapper = styled.div`
  width: 283px;
  height: 48px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #e9b425;
`;

export const Svg = styled.img`
  z-index: 100;
  width: 30px;
  height: 30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -95px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  /* margin-bottom: 208px;
  margin-top: 25px; */
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50px;
  width: 379px;
  height: 60px;
  padding-left: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
`;

export const Button = styled.button`
  text-align: center;
  width: 379px;
  height: 67px;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 90px;
  color: #e0e0e0;
`;

export const Title2 = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: #e0e0e0;
`;

export const Subtitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
  width: 301px;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  position: absolute;
  width: 349px;
  height: 94px;

  @media (max-width: 768px) {
    position: relative;
  }
`;
