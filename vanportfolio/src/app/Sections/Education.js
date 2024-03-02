"use client";
import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <Container id="section-education">
      <div>
        <h1>Éducation</h1>
        <h2>2021</h2>
        <h3>Certificat (Bootcamp) en Développement Web Full Stack</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>
            Framework React
            <ul>
              <li>Redux</li>
              <li>Promises Async/Await</li>
            </ul>
          </li>
          <li>MongoDB, Firebase</li>
          <li>Git, GitHub, VSCode, Figma, Insomnia</li>
          <li>Node.js et RESTful API</li>
        </ul>
        <h2>2016</h2>
        <h3>Baccalauréat en Génie Électrique</h3>
        <h2>2010</h2>
        <h3>Diplôme d'études collégiales</h3>
        <h2>2008</h2>
        <h3>Diplôme d'études secondaires</h3>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Education;
