import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar
      style={{
        backgroundColor: "#111111",
      }}
      position="static"
    >
      <Toolbar>
        <NavLink
          to="/"
          style={{
            color: "#ffffff",
            marginLeft: "10px",
          }}
        >
          Homepage
        </NavLink>
        <NavLink
          to="/users"
          style={{
            color: "#ffffff",
            marginLeft: "10px",
          }}
        >
          All Users
        </NavLink>
        <NavLink
          to="/adduser"
          style={{
            color: "#ffffff",
            marginLeft: "10px",
          }}
        >
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
