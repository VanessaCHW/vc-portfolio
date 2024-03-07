"use client";
import React from "react";
import styled from "styled-components";

import CardText from "./CardText";

const EduEvent = ({ date, diploma, school, items, tags }) => {
  return (
    <Container>
      <Circle />
      <Line />
      <BubbleContainer>
        <Bubble>
          <CardText
            date={date}
            title={diploma}
            subtitle={school}
            items={items}
            tags={tags}
          />
        </Bubble>
      </BubbleContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

const BubbleContainer = styled.div`
  width: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Bubble = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 24px;
  margin-left: 30px;
  border-top: 5px solid #f2c4ce; /**Cute pink */

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
    left: -15px;
    top: 15px;
    border-top: 15px solid transparent;
    border-right: 15px solid white;
    border-left: none;
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
  background-color: #f2c4ce; /**Cute pink */
  border-radius: 50%;
  position: relative;
  right: -14px;
  top: 32px;
`;

export default EduEvent;
