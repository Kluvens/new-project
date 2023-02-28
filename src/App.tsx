import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';
import { NavBar } from './componenets/navbar/navbar';
import { SearchBar } from './componenets/searchbar/searchbar';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
