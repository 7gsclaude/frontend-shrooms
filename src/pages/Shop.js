import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShroomDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ShroomItem = styled.div`
  width: 30%;
  margin: 10px;
  padding: 10px;
  background-color: #fc8b9e;
  border-radius: 5px;
`;

const ShroomImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

  const ShroomName = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: #db09db;
  `;

  const ImageDescription = styled.h3`
    font-family: "Open Sans", sans-serif;

    align-items: center;
    text-align: center;
  `;


const Shop = ({ shrooms }) => {
  const loaded = () => {
    return shrooms.map((shroom) => (
      <ShroomItem key={shroom._id}>
        <Link to={`/shrooms/${shroom._id}`}>
          <ShroomName>{shroom.name}</ShroomName>
        </Link>
        <ShroomImage src={shroom.image} alt={shroom.name} />
        <ImageDescription>{shroom.title}</ImageDescription>
        <ImageDescription>{shroom.price}</ImageDescription>
      </ShroomItem>
    ));
  };

  const loading = () => {
    return <h1>Loading shroom details...</h1>;
  };

  return (
    <section>
      <ShroomDisplay>{shrooms ? loaded() : loading()}</ShroomDisplay>
    </section>
  );
};

export default Shop;
