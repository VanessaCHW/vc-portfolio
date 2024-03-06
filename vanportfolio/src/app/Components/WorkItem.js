"use client";
import React from "react";
import styled from "styled-components";

import CheckItem from "./CheckItem";

const WorkItem = ({ logo, date, title, company, items, tags }) => {
  return (
    <Container>
      <BubbleContainer>
        <Bubble>
          {logo && <img />}
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Company>{company}</Company>
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
  border-top: 4px solid #f58f7c;

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
    top: 20px;
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
  background-color: #e6735e;
  border-radius: 50%;
  position: relative;
  left: -14px;
  top: 32px;
`;

const Date = styled.div`
  font-family: "Comfortaa", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #e6735e;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #2c2b30;
`;

const Company = styled.div`
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
  background-color: #f7b3a6;
  padding: 3px 5px;
  border-radius: 4px;
  color: #4f4f51;
`;
export default WorkItem;
