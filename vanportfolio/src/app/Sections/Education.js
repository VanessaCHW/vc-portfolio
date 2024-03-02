"use client";
import React from "react";
import styled from "styled-components";
import CheckItem from "../Components/CheckItem";

const Education = () => {
  return (
    <Container id="section-education">
      <Box>
        <h1>Éducation</h1>
        <h2>2021</h2>
        <h3>Certificat (Bootcamp) en Développement Web Full Stack</h3>
        <ul>
          <CheckItem text="HTML, CSS, JavaScript" />
          <CheckItem text="Framework React" />
          <CheckItem text="Redux" />
          <CheckItem text="MongoDB, Firebase" />
          <CheckItem text="Git, GitHub, VSCode, Figma, Insomnia" />
          <CheckItem text="Node.js et RESTful API" />
        </ul>
      </Box>
      <Box>
        <h2>2016</h2>
        <h3>Baccalauréat en Génie Électrique</h3>
      </Box>
      <Box>
        <h2>2010</h2>
        <h3>Diplôme d'études collégiales</h3>
      </Box>
      <Box>
        <h2>2008</h2>
        <h3>Diplôme d'études secondaires</h3>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Box = styled.div`
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 24px;
  margin: 24px 0px;
`;

export default Education;
