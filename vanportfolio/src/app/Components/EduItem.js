"use client";
import React from "react";
import styled from "styled-components";

import CheckItem from "./CheckItem";

const EduItem = ({ logo, date, diploma, school, items, tags }) => {
  return (
    <Container>
      <Circle />
      <Line />
      <BubbleContainer>
        <Bubble>
          {logo && <img />}
          <Date>{date}</Date>
          <Diploma>{diploma}</Diploma>
          <School>{school}</School>
          {items && items.map((item) => <CheckItem text={item} />)}
          {tags && (
            <TagContainer>
              {tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </TagContainer>
          )}
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
  border-top: 4px solid #f2c4ce;

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
    top: 20px;
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
  background-color: #f0b6c3;
  border-radius: 50%;
  position: relative;
  right: -14px;
  top: 32px;
`;

const Date = styled.div`
  font-family: "Comfortaa", sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #f07d97;
`;

const Diploma = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #2c2b30;
`;

const School = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #4f4f51;
`;

const TagContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
const Tag = styled.div`
  display: block;
  background-color: #f2c4ce;
  padding: 3px 5px;
  border-radius: 4px;
  color: #4f4f51;
`;
export default EduItem;
