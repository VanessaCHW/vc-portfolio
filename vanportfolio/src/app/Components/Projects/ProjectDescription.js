"use client";
import React from "react";
import styled from "styled-components";

const ProjectDescription = ({ project }) => {
  return (
    <Container>
      <div>{project.name}</div>
      <div>{project.description}</div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;

  background: #81b3b1;
  opacity: 90%;
`;

export default ProjectDescription;
