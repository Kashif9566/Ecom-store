import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faListAlt,
  faShoppingCart,
  faUsers,
  faUser,
  faChartBar,
  faTags,
  faBullhorn,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="page-container"
      style={{
        backgroundColor: "#ebebeb",
        flexGrow: 1,
        marginTop: "60px",
        padding: "10px",
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="col-md-3" style={{ position: "fixed" }}>
          <div className="d-flex flex-column align-items-start justify-content-start mt-4 mx-5">
            <div>
              <div
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faHome} className="mx-1" />
                <div style={{ fontWeight: "bold" }}>Home</div>
              </div>
              <Link
                to={"/admin/products"}
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                  textDecoration: "none",
                  color: "black",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faListAlt} className="mx-1 " />
                <div style={{ fontWeight: "bold" }}>Products</div>
              </Link>
              <Link
                to={"/admin/categories"}
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                  textDecoration: "none",
                  color: "black",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faTags} className="mx-1 " />
                <div style={{ fontWeight: "bold" }}>Categories</div>
              </Link>
              <Link
                to={"/order"}
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                  textDecoration: "none",
                  color: "black",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mx-1" />
                <div style={{ fontWeight: "bold" }}>Order</div>
              </Link>
              <div
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faUsers} className="mx-1" />
                <div style={{ fontWeight: "bold" }}>Customers</div>
              </div>
              <div
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faChartBar} className="mx-1" />
                <div style={{ fontWeight: "bold" }}>Analytics</div>
              </div>
              <div
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faTags} className="mx-1" />
                <div style={{ fontWeight: "bold" }}>Discounts</div>
              </div>
              <div
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faBullhorn} className="mx-1" />
                <div style={{ fontWeight: "bold" }}>Marketing</div>
              </div>
              <div
                className="d-flex align-items-center justify-content-start my-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.target.style.borderRadius = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={faCog} className="mx-1" />
                <div style={{ fontWeight: "bold" }}>Setting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
