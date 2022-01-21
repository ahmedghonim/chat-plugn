import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/About-us";
import Chat from "../Pages/Chat";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
function RoutesC() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
}

export default RoutesC;
