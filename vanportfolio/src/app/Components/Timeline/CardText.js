"use client";
import React from "react";
import styled from "styled-components";

import CheckItem from "./CheckItem";

const CardText = ({ date, title, subtitle, items, tags }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {items && (
        <ItemsContainer>
          {items.map((item) => (
            <CheckItem text={item} />
          ))}
        </ItemsContainer>
      )}
      {tags && (
        <TagContainer>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Date = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #f09290;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--theme-black);
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: var(--theme-dark-grey);
`;

const ItemsContainer = styled.div`
  margin-top: 8px;
`;

const TagContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.div`
  font-size: 16px;
  display: block;
  background-color: var(--theme-light-grey);
  padding: 3px 8px;
  border-radius: 4px;
  color: #4f4f51;
`;

export default CardText;
