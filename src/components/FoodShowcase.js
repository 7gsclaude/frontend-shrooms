import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
`;

const FoodHeading = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  padding: 30px;
  background-color: #db09db;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
`;

const FoodImage = styled.img`
  position: relative;
  width: 40%;
  height: auto;
  height: auto;
  border-radius: 5px;
  flex: 1;
  left: 250px;
`;

const DescriptionBlock = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: #fc8b9e;
  color: white;
  border-radius: 10px;
  position: relative;
  top: -300px;
  left: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
    flex-direction: column;
`;

const Description = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  padding: 0;
  margin: 0;
  /* text-align: center;
     
  justify-content: center; */
     `

const InstagramLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #db09db;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #c709c7;
  }
`;

const FoodShowcase = () => {
  return (
    <Container>
      <FoodHeading>Chicago's Best Home Grown Mushrooms</FoodHeading>
      <FoodImage
        src="https://res.cloudinary.com/hksqkdlah/image/upload/9746_sfs-braisedbrisketwithmushrooms-17.jpg"
        alt="mushroom plate"
      />
      <DescriptionBlock>
        <Description>Hello</Description>
        <InstagramLink href="https://www.instagram.com" target="_blank">
          Visit this Restaurant's Instagram
        </InstagramLink>
      </DescriptionBlock>
    </Container>
  );
};

export default FoodShowcase;
