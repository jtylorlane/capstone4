import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => state.handleCart);
  console.log("userFromNavbar", auth.currentUser);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Capstone
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {auth.currentUser ? (
                <NavLink
                  onClick={async () => {
                    await signOut(auth);
                  }}
                  className="btn btn-outline-dark"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login" className="btn btn-outline-dark">
                  Login
                </NavLink>
              )}
              {/* {auth.currentUser ? (
                <li
                  className="nav-list-item"
                  onClick={async () => {
                    await signOut(auth);
                  }}
                >
                  Logout
                </li>
              ) : (
                <li
                  className="nav-list-item"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </li>
              )} */}
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
