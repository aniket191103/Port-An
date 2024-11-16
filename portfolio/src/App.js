import React from 'react';
import {Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
};

export default App;
