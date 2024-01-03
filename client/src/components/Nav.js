import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { selectCartItems } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, productsBySearch } from "../redux/slices/product";

const Nav = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchTerm));
    setSearchTerm("");
  };

  const searchResults = useSelector(productsBySearch);
  console.log(searchResults);

  return (
    <nav
      className="navbar shadow navbar-expand-lg "
      style={{ backgroundColor: "#1e2d7d" }}
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
          <form className="d-flex w-100" role="search" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                className="form-control me-2 flex-grow-1 "
                type="search"
                placeholder="Search"
                style={{ position: "relative" }}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button className="btn btn-outline-secondary" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              {searchResults.length > 0 && (
                <div className="position-absolute start-0 top-100 bg-white w-100">
                  {searchResults.map((product) => (
                    <div key={product.id} className="border-bottom p-2">
                      {product.name}
                    </div>
                  ))}
                </div>
              )}
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
            <li className="nav-item border-end mx-1">
              <a
                className="nav-link active"
                href="/"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li className="nav-item border-end">
              <Link to={"/cart"} className="nav-link active mx-2">
                <div className="position-relative" style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {totalQuantity > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalQuantity}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
                </div>
              </Link>
            </li>

            <li className="nav-item border-end mx-2">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
