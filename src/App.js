import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Hotel1, Hotel2, Hotel3, Hotel4,Hotel5, Hotel6, Hotel7} from "./pages/Hotels"
/*import PortFolio from "./pages/PortFolio";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact"; */

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/hotel1" exact element={<Hotel1 />} />
      <Route path="/hotel2" exact element={<Hotel2 />} />
      <Route path="/hotel3" exact element={<Hotel3 />} />
      <Route path="/hotel4" exact element={<Hotel4 />} />
      <Route path="/hotel5" exact element={<Hotel5 />} />
      <Route path="/hotel6" exact element={<Hotel6 />} />
      <Route path="/hotel7" exact element={<Hotel7 />} />
      <Route path="/*" exact element={<Home />} />
    </Routes>
  );
}

export default App
