import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Brand Logo */}
      <NavLink className="navbar-brand fw-bold" to="/">
        Customer Management
      </NavLink>
      {/* Toggler for Mobile View */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Collapsible Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* Navigation Links */}
          <li className="nav-item">
            <NavLink
              className="nav-link text-primary"
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-primary"
              activeClassName="active"
              to="/add"
            >
              Add Customer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-primary"
              activeClassName="active"
              to="/show"
            >
              Show Customers
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
