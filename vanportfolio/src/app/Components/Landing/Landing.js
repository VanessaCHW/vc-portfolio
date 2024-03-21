"use client";
import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <LandingImg src="/landing.png" />
      <LandingText>
        <Portrait>&gt; portrait virtuel</Portrait>
        <Name>vanessa chan</Name>
        <Subtitle>développement web & ingénierie </Subtitle>
        <LandingDescription>
          Ingénieure électrique de formation, j'ai complété un certificat en
          Développement Web Full Stack. J'ai par la suite occupé un poste de
          Programmeur Analyste, dans lequel j'ai pu travailler sur le
          développement d'interface utilisateur en React.
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

  /**Mobile */
  @media (max-width: 600px) {
    padding: 1em;
  }
`;

const LandingImg = styled.img`
  width: 900px;

  /**Mobile */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const LandingText = styled.div`
  max-width: 500px;
  margin-left: 50px;
  margin-top: 20px;

  /**Mobile */
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const Portrait = styled.div`
  color: var(--global-pink);
  font-size: 20px;

  /**Mobile */
  @media (max-width: 600px) {
    margin-top: 1em;
  }
`;

const Name = styled.div`
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 60px;
  color: var(--theme-black);
  margin-top: 70px;

  /**Mobile */
  @media (max-width: 600px) {
    margin-top: 0em;
    font-size: 3em;
  }
`;

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
`;

const LandingDescription = styled.div`
  margin-top: 70px;

  /**Mobile */
  @media (max-width: 600px) {
    margin-top: 2em;
    font-size: 1em;
    line-height: 1.2em;
  }
`;

const LandingIcons = styled.div`
  margin-top: 36px;
  /**Mobile */
  @media (max-width: 600px) {
    margin-top: 1em;
  }
`;

const LandingIcon = styled.img`
  width: 42px;
  margin-right: 1em;
`;

export default Landing;
