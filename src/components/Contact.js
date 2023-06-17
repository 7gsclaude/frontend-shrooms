import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

`;

const Heading = styled.div`
  font-size: 25px;
  padding: 0;
  margin: 0;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  margin-right: 10px;
`;

const NavigationLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Heading>Contact Me</Heading>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href="https://www.instagram.com">
            Instagram
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="https://www.twitter.com">
            Twitter
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Container>
  );
};

export default Contact;
