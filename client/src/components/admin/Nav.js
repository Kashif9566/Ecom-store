import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav
      className="navbar shadow navbar-expand-lg"
      style={{
        backgroundColor: "#1e2d7d",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: "1000",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand text-white"
          href="/"
          style={{
            fontFamily: "Open Sans",
            fontSize: "30px",
            fontWeight: "100",
          }}
        >
          Tech Shop
        </a>
        <div
          className="d-flex align-items-center me-3"
          style={{ width: "45%" }}
        >
          <form className="d-flex w-100" role="search">
            <div className="input-group">
              <input
                className="form-control me-2 flex-grow-1 "
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </div>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between">
            <li className="nav-item  mx-2">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li className="nav-item  mx-2">
              <Link
                className="nav-link active"
                to={"/profile"}
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
