"use client";
import React from "react";
import styled from "styled-components";

import ProjectBox from "./ProjectBox";
import ProjectsData from "./ProjectsData";

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
            <div>
              Page personnelle crée avec Next. Page personnelle crée avec Next.
              Page personnelle crée avec Next. Page personnelle crée avec Next.{" "}
            </div>
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
                GITHUB & DÉMO(.GIF)
              </CodeLink>
            </ProjLinks>
            <ProjTitle>"Pink Planner" - Application de calendrier</ProjTitle>
            <div>
              Page personnelle crée avec Next. Page personnelle crée avec Next.
              Page personnelle crée avec Next. Page personnelle crée avec Next.{" "}
            </div>
          </ProjBox>
        </ProjectList>

        <ProjectList>
          <ProjBox>
            <ImgContainer>
              <FolioImg src="snow.png" />
            </ImgContainer>
            <ProjLinks>
              CONCORDIA BOOTCAMP / 2021 /{" "}
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
            <ProjTitle>"Snowball escape" - Jeu Javascript</ProjTitle>
            <div>
              Page personnelle crée avec Next. Page personnelle crée avec Next.
              Page personnelle crée avec Next.{" "}
            </div>
          </ProjBox>
          <ProjBox>
            <ImgContainer>
              <FolioImg src="twit1.png" />
            </ImgContainer>
            <ProjLinks>
              CONCORDIA BOOTCAMP / 2021 /{" "}
              <CodeLink
                href="https://github.com/VanessaCHW/vc-portfolio"
                target="_blank"
              >
                GITHUB
              </CodeLink>{" "}
            </ProjLinks>
            <ProjTitle>Twitter clone</ProjTitle>
            <div>
              Page personnelle crée avec Next. Page personnelle crée avec Next.
              Page personnelle crée avec Next.{" "}
            </div>
          </ProjBox>
        </ProjectList>

        <Subtitle>&gt; mises à jour au portfolio à venir </Subtitle>
        <ul>
          <li>Design pour format mobile / tablette</li>
          <li>Page individuelle pour chaque projet</li>
          <li>Dark theme</li>
        </ul>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  /*background-color: #dde9ed;*/ /** Bleu-gris pale */
`;

const Content = styled.div`
  max-width: var(--max-width);
  flex-grow: 1;
  margin-top: 50px;
  margin-bottom: 100px;
`;

/*const ProjectList = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;*/

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

const ProjLinks = styled.div`
  color: #929292;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  margin-top: 18px;
  font-size: 16px;
`;

const ProjTitle = styled.div`
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 3px;
  font-size: 18px;
`;

const CodeLink = styled.a`
  color: var(--global-pink);
  text-decoration: underline;
`;

const Subtitle = styled.h2`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export default Projects;
