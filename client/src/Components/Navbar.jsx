import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NewNavbar() {
  return (
    <div>
      <Navbar variant="dark" style={{ background: "#563d7c" }}>
        <Container>
          <Navbar.Brand className="text-light" href="#home">
            Small Store
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              style={{ color: "#cbbde2" }}
              className="text-decoration-none me-3"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{ color: "#cbbde2" }}
              className="text-decoration-none"
              to="/orders"
            >
              Orders
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
