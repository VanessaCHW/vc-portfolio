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
  color: #727275;
`;

/**
 * TODO: Aligner le checkmark et le texte
 */

export default CheckItem;
