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
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

export const Input = styled.input`
  background: #26292c;
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
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  position: absolute;
  width: 349px;
  height: 94px;
`;
