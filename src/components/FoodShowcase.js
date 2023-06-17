import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: auto;
  width: 100%;
  
  color: white;
  display: flex;
  flex-direction: column;

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
  
`;

const FoodImage = styled.img`
position: relative;
width: 40%;
height: auto;
height: auto;
border-radius: 5px;
flex: 1 ;

`
const Description = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: #fc8b9e;
  color: white;
  border-radius: 10px;
    position: relative;
    top: -400px;
  left: 600px; 

`;


const FoodShowcase = () => {
    return (
      <Container>
        <FoodHeading>Chicago's Best Home Grown Mushrooms</FoodHeading>
        <FoodImage
          src="https://res.cloudinary.com/hksqkdlah/image/upload/9746_sfs-braisedbrisketwithmushrooms-17.jpg"
          alt="mushroom plate"
            />
            <Description>
            Looking good today
            </Description>
      </Container>
    );
}

export default FoodShowcase