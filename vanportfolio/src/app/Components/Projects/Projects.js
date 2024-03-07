"use client";
import React from "react";
import styled from "styled-components";

import ProjectBox from "./ProjectBox";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <Container id="section-projets">
      <Content>
        <h1>Projets</h1>
        <p>
          Liste de projets réalisés en développement web, soit dans le cadre
          d'une formation, soit pour un projet personnel.{" "}
        </p>

        <ProjectList>
          {ProjectsData.map((project) => (
            <ProjectBox project={project} key={"project_" + project.id} />
          ))}
        </ProjectList>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  background-color: #dde9ed; /** Bleu-gris pale */
`;

const Content = styled.div`
  max-width: var(--max-width);
  flex-grow: 1;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const ProjectList = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export default Projects;
