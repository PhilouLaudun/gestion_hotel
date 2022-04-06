import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
/*import PortFolio from "./pages/PortFolio";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact"; */

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/*" exact element={<Home />} />
    </Routes>
  );
}

export default App
