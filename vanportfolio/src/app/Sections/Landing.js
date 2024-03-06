"use client";
import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <LandingImg src="/Vanlogov3.png" />
      <LandingText>
        <Name>Vanessa Chan</Name>
        <Subtitle>Développement Web | Ingénierie </Subtitle>
      </LandingText>
    </Container>
  );
};

const Container = styled.div`
  background: url("/geometry2.png");
  min-height: 105vh;
  text-align: center;
`;

const LandingImg = styled.img`
  max-height: 60vh;
  display: bloc;
  margin-top: 10vh;
  margin-bottom: 30px;
`;

const LandingText = styled.div`
  font-weight: 400;
`;

const Name = styled.div`
  font-family: "Comfortaa", sans-serif;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #2c2b30; /**GRIS FONCÉ */
`;
const Subtitle = styled.div`
  font-size: 28px;
  font-family: "Nunito", sans-serif;
  color: #4f4f51; /**GRIS PALE */
`;

export default Landing;
