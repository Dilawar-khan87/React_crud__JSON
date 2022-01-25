import React from "react";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}
