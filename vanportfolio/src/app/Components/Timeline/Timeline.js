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
          Apperçu de mes expériences professionnelles et formations sous forme
          de ligne chronologique, à partir de l'évènement le plus récent.
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
