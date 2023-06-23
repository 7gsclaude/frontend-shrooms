import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import About from '../pages/About'
import Shop from "../pages/Shop";
import Show from "../pages/Show";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import {API_URLS} from "../urls"

const Main = () => {
  const [shrooms, setShrooms] = useState(null);

  //fetch request of shrooms from my backend Api

  const getShrooms = async () => { 
    const response = await fetch(API_URLS.shrooms);
    const data = await response.json();
    setShrooms(data);
  };


//creates new shroom item // make sure that the MAIN_URL is correct or present there
  const createShroom = async (shroom) => {
    await fetch(API_URLS.MAIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shroom),
    });
    getShrooms();
  };

  //updates shroom item
  const updateShroom = async (shroom, id) => {
    await fetch(API_URLS.shrooms + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shroom),
    });
    getShrooms();
  }
  
  //deletes shroom item
  const deleteShroom = async (id) => {
    await fetch(API_URLS.shrooms + id, {
      method: "DELETE",
    });
    getShrooms();
  };

  //fetch the list of shrooms when the component mounts
   useEffect(() => {
     getShrooms();
   }, []);
  
  //if shrooms is null, return loading... else return the app

    return (
      <main>
        <Routes>
          <Route
            path="/"
            element={<Index shrooms={shrooms} createShroom={createShroom} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={<Shop shrooms={shrooms} />}
          />
          <Route path="/shrooms/:id" element={<Show shrooms={shrooms} updateShroom={updateShroom} deleteShroom={deleteShroom} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          

          

        </Routes>

      </main>
    );
}

export default Main