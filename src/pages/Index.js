import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AboutComp from "../components/AboutComp";
import Contact from "../components/Contact";  // Added imports
import FoodShowcase from "../components/FoodShowcase";

const Section = styled.div`
  height: 100vh;
  justify-content: center;
  scroll-snap-align: center;
  position: relative;
  margin: 20px;
`;

const AboutSection = styled.div`
  height: 50vh;
  justify-content: center;
  scroll-snap-align: center;
  margin-top: 40px;`

const ShroomDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* Added gap between items */
`;

const ShroomItem = styled.div`
  width: 25%;
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

const Container = styled.div`
  height: 50vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;

`;

const Index = (props) => {
  const formFields = {
    name: "",
    image: "",
    title: "",
  };

  const [newForm, setNewForm] = useState(formFields);

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createShroom(newForm);
    setNewForm(formFields);
  };

  const loaded = () => {
    const limitedShrooms = props.shrooms.slice(0, 3); // Limit to first 3 items
    return limitedShrooms.map((shroom) => (
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
    return <h1>Finding the Shrooms (loading)...</h1>;
  };

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Shroom" />
      </form>

      <Section>
        <Container>
          <ShroomDisplay>{props.shrooms ? loaded() : loading()}</ShroomDisplay>
          <AboutSection>
            <AboutComp style={{ marginTop: "25px" }} />
          </AboutSection>
          <FoodShowcase />
          <Contact />
        </Container>
      </Section>
    </Section>
  );
};

export default Index;
