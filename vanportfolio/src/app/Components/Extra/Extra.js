"use client";
import React from "react";
import styled from "styled-components";

const Extra = () => {
  return (
    <Container id="section-extra">
      <Content>
        <h1>Extra</h1>
        <p>Quelques infos supplémentaires question de mieux de connaître.</p>

        <InfoContainer>
          <InfoBox>
            <ImageFilter></ImageFilter>
            <InfoText>
              Je suis de personnalité calme, porte des lunettes et aime lire
              pour le fun (nerd much?!). 🤓📕
            </InfoText>
          </InfoBox>
          <InfoBox>
            <ImageFilter>
              <InfoText>
                Mon sport préféré est l'escalade de bloc ou en top-rope. 🧗‍♀️🌲
              </InfoText>
            </ImageFilter>
          </InfoBox>
          <InfoBox>
            J'ai un talent négatif en pâtisserie (excepté pour les tiramisu).
            🍰🍞
          </InfoBox>
          <InfoBox>
            Un de mes hobbies est le dessin traditionnel ou digital. J'ai
            d'ailleurs fait le graphique au haut de la page. ✏️💻
          </InfoBox>
        </InfoContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: var(--max-width);
  flex-grow: 1;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 50px 0px;
`;

const InfoBox = styled.div`
  width: 25%;
  height: 240px;
  padding: 16px;

  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 300px;
`;

const ImageFilter = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: pink;
  width: 100%;
  height: 240px;
  opacity: 0.55;

  :hover {
    opacity: 0.8;
  }
`;

const InfoText = styled.div`
  z-index: 3;
`;

export default Extra;
