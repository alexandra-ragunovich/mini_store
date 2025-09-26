import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </>
  );
};

export default App;
