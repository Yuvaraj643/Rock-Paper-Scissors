import React from "react";
import Home from "./Components/Homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Components/Game/Game";
import Spline from '@splinetool/react-spline';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
