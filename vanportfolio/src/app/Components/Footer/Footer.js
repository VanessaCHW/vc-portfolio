"use client";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container id="section-contact">
      <Content>
        <h1>&gt; contact</h1>
        <ContactInfo>
          <AddressBox>
            <div>Vanessa Chan</div>
            <div>Montreal, QC, Canada</div>
          </AddressBox>
          <LinkBox>
            <li>
              <ContactLink href="mailto: chw.vanessa@gmail.com">
                Courriel
              </ContactLink>
            </li>
            <li>
              <ContactLink
                target="_blank"
                href="https://www.linkedin.com/in/vanessachw/"
              >
                LinkedIn
              </ContactLink>
            </li>
            <li>
              <ContactLink target="_blank" href="https://github.com/VanessaCHW">
                Github
              </ContactLink>
            </li>
          </LinkBox>
        </ContactInfo>
      </Content>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #4f4f51;
`;

const Content = styled.div`
  width: var(--max-width);
  margin: 40px 0px;
  color: white;
  font-weight: 200;
  & > h1 {
    color: white;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const AddressBox = styled.div`
  flex-basis: 50%;
`;

const LinkBox = styled.ul`
  flex-basis: 50%;
  list-style-type: none;
  font-size: 16px;
`;

const ContactLink = styled.a`
  text-decoration: underline;
`;

export default Footer;
