"use client";
import React from "react";
import styled from "styled-components";

import EduEvent from "./EduEvent";
import WorkEvent from "./WorkEvent";
import TimelineEvents from "./TimelineEvents";

const Timeline = () => {
  return (
    <Container id="section-parcours">
      <Content>
        <h1>&gt; mon parcours</h1>
        <p>
          Apperçu de mes expériences de travail et formations sous forme de
          timeline. S.V.P. se référer au CV pour obtenir de plus amples détails.
        </p>

        <TimelineContainer>
          {TimelineEvents.map((ev) => {
            if (ev.eventType == "work") {
              return (
                <WorkEvent
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
                <EduEvent
                  logo={ev.logo}
                  date={ev.date}
                  diploma={ev.diploma}
                  school={ev.school}
                  items={ev.items}
                  tags={ev.tags}
                  key={"ev" + ev.id}
                />
              );
            }
          })}
        </TimelineContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: var(--max-width);
  flex-grow: 1;
`;

const TimelineContainer = styled.div`
  margin: 50px 0px;
`;

export default Timeline;
