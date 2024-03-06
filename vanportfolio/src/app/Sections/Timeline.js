"use client";
import React from "react";
import styled from "styled-components";

import EduItem from "../Components/EduItem";
import WorkItem from "../Components/WorkItem";
import TimelineEvents from "../Data/TimelineEvents";

const Timeline = () => {
  return (
    <Container id="section-parcours">
      <h1>Parcours</h1>
      <p>
        Apperçu de mes expériences de travail et formations sous forme de
        timeline. S.V.P. se référer au CV pour obtenir de plus amples détails
        sur chaque élément. Pour obtenir mon CV, veuillez-me contacter sur
        Linkedin.{" "}
      </p>

      <EduItem
        date="*formation d'appoint à venir* AVRIL - JUIN 2024"
        diploma="React JS (formation continue)"
        school="Collège de Maisonneuve"
      />
      <EduItem
        date="2023"
        diploma="Formations continues"
        school="Technologia"
        items={[
          "Gestion du temps: définir ses priorités en restant flexible",
          "Gestion du stress: l'apprivoiser pour en tirer profit",
          "Excel: catégories de fonctions",
          "OneNote: fonctionnalités essentielles",
        ]}
      />
      {TimelineEvents.map((ev) => {
        if (ev.eventType == "work") {
          return (
            <WorkItem
              logo={ev.logo}
              date={ev.date}
              title={ev.title}
              company={ev.company}
              items={ev.items}
              tags={ev.tags}
              key={"ev" + ev.id}
            />
          );
        } else {
          return (
            <EduItem
              logo={ev.logo}
              date={ev.date}
              diploma={ev.diploma}
              school={ev.school}
              tags={ev.tags}
              key={"ev" + ev.id}
            />
          );
        }
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;

  & > p {
    margin-top: 20px;
    margin-bottom: 70px;
  }
`;

export default Timeline;
