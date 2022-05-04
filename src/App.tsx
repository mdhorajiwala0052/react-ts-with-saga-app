import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "../src/components/MovieDetail";
import Header from "./components/shared/layouts/Header";
import Footer from "./components/shared/layouts/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
