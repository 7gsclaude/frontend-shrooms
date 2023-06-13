import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const ShowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  padding: 20px;
`;

const ShroomImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpdateInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 300px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #fc8b9e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Show = ({ shrooms, updateShroom, deleteShroom }) => {
  const [updatedShroom, setUpdatedShroom] = useState({
    name: "",
    image: "",
    title: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const shroom = shrooms.find((shroom) => shroom._id === id);

  if (!shroom) {
    return <h1>Loading shroom details...</h1>;
  }

  const handleUpdate = (event) => {
    setUpdatedShroom({
      ...updatedShroom,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = () => {
    deleteShroom(shroom._id);
    navigate(`/`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateShroom(updatedShroom, id);
    navigate(`/`);
  };

  return (
    <ShowContainer>
      <h1>{shroom.name}</h1>
      <ShroomImage src={shroom.image} alt={shroom.name} />
      <h3>{shroom.title}</h3>
      <UpdateForm onSubmit={handleSubmit}>
        <UpdateInput
          type="text"
          name="name"
          placeholder="New Name"
          value={updatedShroom.name}
          onChange={handleUpdate}
        />
        <UpdateInput
          type="text"
          name="image"
          placeholder="New Image URL"
          value={updatedShroom.image}
          onChange={handleUpdate}
        />
        <UpdateInput
          type="text"
          name="title"
          placeholder="New Title"
          value={updatedShroom.title}
          onChange={handleUpdate}
        />
        <SubmitButton type="submit">Update Shroom</SubmitButton>
        <SubmitButton onClick={handleDelete}>Delete Shroom</SubmitButton>
      </UpdateForm>
      <Link to="/shop">Back to Shop</Link>
    </ShowContainer>
  );
};

export default Show;
