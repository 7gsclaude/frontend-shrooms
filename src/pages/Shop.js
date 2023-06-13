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

const Shop = ({ shrooms }) => {
  const loaded = () => {
    return shrooms.map((shroom) => (
      <ShroomItem key={shroom._id}>
        <Link to={`/shrooms/${shroom._id}`}>
          <h1>{shroom.name}</h1>
        </Link>
        <ShroomImage src={shroom.image} alt={shroom.name} />
        <h3>{shroom.title}</h3>
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
