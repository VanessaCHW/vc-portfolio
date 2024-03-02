"use client";
import React from "react";
import styled from "styled-components";

import CheckItem from "../Components/CheckItem";
import BoxSmall from "../Components/BoxSmall";

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
      <BoxSmall year="2016" diploma="Baccalauréat en Génie Électrique" />
      <BoxSmall year="2010" diploma="Diplôme d'études collégiales" />
      <BoxSmall year="2008" diploma="Diplôme d'études secondaires" />
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
