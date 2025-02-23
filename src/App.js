import React from "react";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar"; // Ensure correct import
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import CampaignDetails from "./pages/CampaignDetails";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      </Routes>
    </>
  );
};

export default App;
