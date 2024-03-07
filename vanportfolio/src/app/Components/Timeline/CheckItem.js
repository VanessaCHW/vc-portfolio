"use client";
import React from "react";
import styled from "styled-components";

const CheckItem = ({ text }) => {
  return (
    <Container>
      <img src="/angle.png" alt="Checkmark" width={24} height={24} />
      <div>{text}</div>
    </Container>
  );
};

const Container = styled.li`
  list-style-type: none;
  display: flex;
  color: var(--list-element);
  font-size: 16px;
`;

export default CheckItem;
