"use client";
import React from "react";
import styled from "styled-components";

import CardText from "./CardText";

const WorkEvent = ({ date, title, company, items, tags }) => {
  return (
    <Container>
      <BubbleContainer>
        <Bubble>
          <CardText
            date={date}
            title={title}
            subtitle={company}
            items={items}
            tags={tags}
          />
        </Bubble>
      </BubbleContainer>
      <Line />
      <Circle />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  /** Pour contrer l'effet de ligne brisée */
  position: relative;
  left: -3px;
`;

const BubbleContainer = styled.div`
  width: 50%;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Bubble = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 24px;
  margin-right: 10px;
  border-top: 5px solid #f5978a; /**Cute orange */

  /**For arrow */
  position: relative;

  /**
  Arrow left of the box
  Source:
  https://codepen.io/lideo/pen/KKGeQG
  */
  &:after {
    content: " ";
    position: absolute;
    right: -15px;
    top: 15px;
    border-top: 15px solid transparent;
    border-right: none;
    border-left: 15px solid white;
    border-bottom: 15px solid transparent;
  }
`;

const Line = styled.div`
  border-left: solid 3px #d6d6d6;
  width: 3px;
`;

const Circle = styled.div`
  height: 25px;
  width: 25px;
  background-color: #f5978a; /**Cute orange */
  border-radius: 50%;
  position: relative;
  left: -14px;
  top: 32px;
`;

export default WorkEvent;
