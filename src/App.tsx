import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from '../src/components/MovieDetail';


const App: React.FC =()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
