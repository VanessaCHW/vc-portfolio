"use client";
import React from "react";
import styled from "styled-components";

const Extra = () => {
  return (
    <Container id="section-extra">
      <Content>
        <h1>&gt; extra</h1>
        <div>
          Quelques infos supplémentaires question de mieux de connaître.
        </div>
        <FactContainer>
          <Fact>
            <CardImg src="icon-climb.png" />
            <CardTitle>Sport</CardTitle>
            <CardText>
              Mon sport préféré est l'escalade intérieure, en bloc ou en
              top-rope.
            </CardText>
          </Fact>
          <Fact>
            <CardImg src="icon-read.png" />
            <CardTitle>Passe-temps</CardTitle>
            <CardText>
              J'aime lire: romans, bien-être, mangas, articles, etc.
            </CardText>
          </Fact>
          <Fact>
            <CardImg src="icon-bake.png" />
            <CardTitle>Souhait</CardTitle>
            <CardText>
              Si je pouvais acquérir un nouveau talent, ce serait d'être bonne
              en pâtisserie.
            </CardText>
          </Fact>
          <Fact>
            <CardImg src="icon-draw.png" />
            <CardTitle>Talent caché</CardTitle>
            <CardText>
              Le dessin traditionnel, et récemment digital. J'ai d'ailleurs fait
              le graphique d'accueil sur cette page.
            </CardText>
          </Fact>
        </FactContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f3f2f2;

  /**Mobile */
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Content = styled.div`
  max-width: var(--max-width);
  display: flex;
  flex-flow: column;
  margin-top: 50px;

  /**Mobile */
  @media (max-width: 600px) {
    max-width: 100%;
    margin: 0;
  }
`;

const FactContainer = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 70px;
  gap: 20px;

  /**Mobile */
  @media (max-width: 600px) {
    margin: 1em 0 1em 0;
    flex-direction: column;
    gap: 10px;
  }
`;

const Fact = styled.div`
  flex-basis: 50%;
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4px;
  background: white;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-20px);
    background: rgb(215, 227, 255);
    background: linear-gradient(
      45deg,
      rgba(215, 227, 255, 1) 0%,
      rgba(255, 179, 179, 1) 100%
    );
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CardImg = styled.img`
  height: 70px;
`;
const CardTitle = styled.h4`
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.1px;
`;

const CardText = styled.div`
  color: grey;
  font-weight: 400;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
`;

export default Extra;

/**<a target="_blank" href="https://icons8.com/icon/Rr5WwA0q2lr5/climbing">Climbing</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
