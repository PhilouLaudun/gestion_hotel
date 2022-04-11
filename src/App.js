import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Hotel1, Hotel2} from "./pages/Hotels"
/*import PortFolio from "./pages/PortFolio";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact"; */

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/hotel1" exact element={<Hotel1 />} />
      <Route path="/hotel2" exact element={<Hotel2 />} />
      <Route path="/*" exact element={<Home />} />
    </Routes>
  );
}

export default App
