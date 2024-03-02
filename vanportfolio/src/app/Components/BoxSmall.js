"use client";
import React from "react";
import styled from "styled-components";

const BoxSmall = ({ logo, year, diploma }) => {
  return (
    <Container>
      {logo && <img />}
      <h2>{year}</h2>
      <h3>{diploma}</h3>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 24px;
  margin: 24px 0px;
`;

export default BoxSmall;
