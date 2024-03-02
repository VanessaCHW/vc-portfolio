"use client";
import React from "react";
import styled from "styled-components";

const CheckItem = ({ text }) => {
  return (
    <Container>
      <img src="/check.svg" alt="Checkmark" width={24} height={24} priority />
      <div>{text}</div>
    </Container>
  );
};

const Container = styled.li`
  list-style-type: none;

  & > img,
  div {
    display: inline-block;
  }
`;

/**
 * TODO: Aligner le checkmark et le texte
 */

export default CheckItem;
