// App.jsx
import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// The Navigation Bar
// This component will be used on all three pages: Home, About, and Contact
const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

// Home Page
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1>Home</h1>
        <p>Welcome to my site</p>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1>About</h1>
        <p>This is about page</p>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1>Contact</h1>
        <p>Some contact information</p>
      </div>
    </div>
  );
};

export default App;
