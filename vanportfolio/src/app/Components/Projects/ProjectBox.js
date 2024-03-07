"use client";
import React, { useState } from "react";
import styled from "styled-components";

import ProjectDescription from "./ProjectDescription";

const ProjectBox = ({ project }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Container
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Image src={project.image} />
      {isShown && <ProjectDescription project={project} />}
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 45%;
  height: 350px;

  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Image = styled.img`
  width: 100%;
`;

export default ProjectBox;
