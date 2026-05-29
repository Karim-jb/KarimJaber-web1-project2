import Footer from "./components/Footer";
import "./styles/default.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

const [user,setUser] = useState("guest")

  return (
    <>
      <BrowserRouter>
        <Nav user={user} />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Login" element={<LoginPage user={user} setUser={setUser} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <div></div>
    </>
  );
}

export default App;
