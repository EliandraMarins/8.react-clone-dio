import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Create } from "./pages/createacc"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/feed" element={<Feed />}></Route>

        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </Router>
  );
}

export default App;


