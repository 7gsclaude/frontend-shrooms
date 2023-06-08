import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import About from '../pages/About'
import Shop from "../pages/Shop";

const Main = (props) => {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
    );
}

export default Main