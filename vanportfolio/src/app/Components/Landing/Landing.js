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
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--theme-black);
`;
const Subtitle = styled.div`
  font-size: 24px;
  line-height: 20px;
  font-family: "Nunito", sans-serif;
  color: var(--theme-dark-grey);
`;

export default Landing;
