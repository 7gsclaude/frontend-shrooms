import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Index = (props) => {
  const formFields = {
    name: '',
    image: '',
    title: '',
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
    return props.shrooms.map((shroom) => (
      <div key={shroom._id} className="shroom">
        <Link to={`/shrooms/${shroom._id}`}>
          <h1>{shroom.name}</h1>
        </Link>
        <img src={shroom.image} alt={shroom.name} />
        <h3>{shroom.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Finding the Shrooms (loading)...</h1>;
  };

  return (
    <section>
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
      {props.shrooms ? loaded() : loading()}
    </section>
  );
};

export default Index;