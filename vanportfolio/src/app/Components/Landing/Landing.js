"use client";
import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <LandingImg src="/Vanlogov3.png" />
      <LandingText>
        <Portrait>&gt; portrait virtuel</Portrait>
        <Name>vanessa chan</Name>
        <Subtitle>développement web & ingénierie </Subtitle>
        <LandingDescription>
          Ingénieure électrique de formation, j'ai complété un certificat en
          Développement Web Full Stack. J'ai par la suite occupé un poste de
          Programmeur Analyste, pour lequel j'ai pu travailler sur le
          développement de l'interface utilisateur d'une application web,
          notamment en JavaScript/React.
          <br />
          <br />
          Je cherche à intégrer une nouvelle équipe et serai contente d'en
          discuter avec vous. Au plaisir !
        </LandingDescription>
        <LandingIcons>
          <a target="_blank" href="https://github.com/VanessaCHW">
            <LandingIcon src="Github.png" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/vanessachw/">
            <LandingIcon src="LinkedIn.png" />
          </a>
        </LandingIcons>
      </LandingText>
    </Container>
  );
};

const Container = styled.div`
  background: url("/geometry2.png");
  padding: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const LandingImg = styled.img`
  width: 900px;
`;

const LandingText = styled.div`
  max-width: 500px;
  font-weight: 400;
  margin-left: 50px;
  margin-top: 20px;
  font-size: 16px;
`;

const Portrait = styled.div`
  color: var(--global-pink);
  font-size: 20px;
`;

const Name = styled.div`
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 60px;
  color: var(--theme-black);
  padding-top: 70px;
`;
const Subtitle = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
`;

const LandingDescription = styled.div`
  padding-top: 70px;
`;

const LandingIcons = styled.div`
  margin-top: 36px;
`;

const LandingIcon = styled.img`
  width: 42px;
  margin-right: 16px;
`;
export default Landing;
