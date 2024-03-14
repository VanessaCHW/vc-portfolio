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
            <img src="icon-climb.png" />
            <p>
              Mon sport préféré est l'escalade intérieure, en bloc ou en
              top-rope.
            </p>
          </Fact>
          <Fact>
            <img src="icon-read.png" />
            <p>J'aime lire: romans, bien-être, mangas, etc.</p>
          </Fact>
          <Fact>
            <img src="icon-bake.png" />
            <p>
              Si je pouvais acquérir un nouveau talent, ce serait en pâtisserie.
            </p>
          </Fact>
          <Fact>
            <img src="icon-draw.png" />
            <p>
              Un de mes hobbies est le dessin traditionnel et digital. J'ai
              d'ailleurs fait le graphique d'accueil sur cette page.
            </p>
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
`;

const Content = styled.div`
  max-width: var(--max-width);
  display: flex;
  flex-flow: column;
  margin-top: 50px;
`;

const FactContainer = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 20px;
`;

const Fact = styled.div`
  flex-basis: 50%;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;
  text-align: center;
`;

export default Extra;

/**<a target="_blank" href="https://icons8.com/icon/Rr5WwA0q2lr5/climbing">Climbing</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
