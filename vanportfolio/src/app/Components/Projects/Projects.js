"use client";
import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container id="section-projets">
      <Content>
        <h1>&gt; mes projets</h1>
        <p>
          Exemples de projets réalisés en développement web dans le cadre d'une
          formation ou pour un projet personnel. Voir{" "}
          <LienGithub href="https://github.com/VanessaCHW" target="_blank">
            github
          </LienGithub>{" "}
          pour la liste complète des projets.
        </p>

        <ProjectList>
          <ProjBox>
            <ImgContainer>
              <FolioImg src="portfoliobrowser.png" />
            </ImgContainer>
            <ProjLinks>
              PROJET PERSO / 2024 /{" "}
              <CodeLink
                href="https://github.com/VanessaCHW/vc-portfolio"
                target="_blank"
              >
                GITHUB
              </CodeLink>{" "}
              /{" "}
              <CodeLink href="https://vanportfolio.vercel.app/" target="_blank">
                DÉMO
              </CodeLink>
            </ProjLinks>
            <ProjTitle>Site personnel / portfolio</ProjTitle>
            <ProjDesc>
              Application React crée avec <i>Next.js</i>. Contient une
              introduction, une section "timeline" et une section portfolio. Des
              mises à jours sont à venir.
            </ProjDesc>
          </ProjBox>

          <ProjBox>
            <ImgContainer>
              <PinkPlanImg src="pinkplanphones.png" />
            </ImgContainer>
            <ProjLinks>
              CONCORDIA BOOTCAMP / 2021 /{" "}
              <CodeLink
                href="https://github.com/VanessaCHW/pink-planner"
                target="_blank"
              >
                GITHUB & DÉMO(GIF)
              </CodeLink>
            </ProjLinks>
            <ProjTitle>"Pink Planner" - Application de planification</ProjTitle>
            <ProjDesc>
              Projet final en React. L'utilisateur peut visualiser, ajouter,
              modifier ou supprimer des évènements. La page d'accueil contient
              un résumé des tâches prévues, la météo et un aperçu et liens vers
              quelques articles d'actualité.{" "}
            </ProjDesc>
          </ProjBox>
        </ProjectList>

        <ProjectList>
          <ProjBox>
            <ImgContainer>
              <SnowImg src="snow.png" />
            </ImgContainer>
            <ProjLinks>
              CONCORDIA BOOTCAMP / 2021 /{" "}
              <CodeLink
                href="https://github.com/VanessaCHW/project-snowfight"
                target="_blank"
              >
                GITHUB
              </CodeLink>{" "}
              /{" "}
              <CodeLink
                href="https://snowfight-escape-demo.netlify.app"
                target="_blank"
              >
                DÉMO
              </CodeLink>
            </ProjLinks>
            <ProjTitle>"Snowball escape" - Jeu Javascript</ProjTitle>
            <ProjDesc>
              Jeu en JavaScript dans lequel l'utilisateur se déplace avec les
              flèches du clavier pour éviter les obstacles ou se déplacer vers
              un objet. Contient un compteur pour le niveau, le score, et le
              nombre de vies restantes.{" "}
            </ProjDesc>
          </ProjBox>
          <ProjBox>
            <ImgContainer>
              <TwitImg src="twitbrowser.png" />
            </ImgContainer>
            <ProjLinks>
              CONCORDIA BOOTCAMP / 2021 /{" "}
              <CodeLink
                href="https://github.com/VanessaCHW/project-m5-twitter-clone"
                target="_blank"
              >
                GITHUB
              </CodeLink>{" "}
            </ProjLinks>
            <ProjTitle>Twitter clone</ProjTitle>
            <ProjDesc>
              Clone du site Twitter/X en React, pour illustrer l'utilisation des
              appels sur une API. L'application permet d'afficher, d'écrire et
              de supprimer les tweets, et d'afficher le profil de plusieurs
              utilisateurs.{" "}
            </ProjDesc>
          </ProjBox>
        </ProjectList>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: var(--max-width);
  flex-grow: 1;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const LienGithub = styled.a`
  color: var(--global-pink);
  text-decoration: underline;
  font-weight: 500;
`;

const ProjectList = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 50px;
`;

const ProjBox = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
`;

const ImgContainer = styled.div`
  background-color: #ededed;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const FolioImg = styled.img`
  max-width: 90%;
`;

const PinkPlanImg = styled.img`
  max-width: 82%;
  position: absolute;
  top: 50px;
`;

const SnowImg = styled.img`
  height: 80%;
`;

const TwitImg = styled.img`
  width: 82%;
  position: absolute;
  top: 50px;
`;

const ProjLinks = styled.div`
  color: var(--desc-superlight-grey);
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  margin-top: 18px;
  font-size: 16px;
`;

const ProjTitle = styled.div`
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 20px;
`;

const CodeLink = styled.a`
  color: var(--global-pink);
  text-decoration: underline;
`;

const ProjDesc = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: var(--desc-light-grey);
`;

export default Projects;
