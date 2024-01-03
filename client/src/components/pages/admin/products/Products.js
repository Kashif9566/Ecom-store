import React from "react";
import { Link } from "react-router-dom";
import { selectProducts } from "../../../../redux/slices/product";
import { useSelector } from "react-redux";
import Nav from "../../../admin/Nav";
import Sidebar from "../../../admin/Sidebar";

const Products = () => {
  const products = useSelector(selectProducts);

  return (
    <div className="row">
      <div className="col-md-2 col-lg-3">
        <Sidebar />
      </div>
      <div className="col-md-10 col-lg-9">
        <Nav />
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <div className="mt-4 d-flex mx-4">
                <span
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginTop: "70px",
                  }}
                >
                  Products
                </span>
              </div>

              <div className="card mt-3 p-3" style={{ margin: 20 }}>
                <div className="d-flex align-items-center justify-content-between mx-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <span>
                        <b>Total Products Listed</b>
                      </span>
                    </div>
                    <div>
                      <span
                        className="mx-5"
                        style={{ fontSize: "30px", fontWeight: "bold" }}
                      >
                        {products.length}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <Link
                      to={"/admin/allProducts"}
                      className="btn btn-secondary"
                    >
                      <b>See Products</b>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card" style={{ margin: 20 }}>
                <div className="card-header">
                  <b>Products</b>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-start justify-content-start mx-4">
                    <span
                      style={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        marginTop: 30,
                      }}
                    >
                      Add Your Products
                    </span>
                    <span style={{ fontSize: "12px" }}>
                      Start by stocking your store with products your customers
                      will love
                    </span>
                    <Link
                      to={"/admin/products/addProduct"}
                      className="btn btn-secondary mt-4 mb-4"
                    >
                      <b>+ Add Product</b>
                    </Link>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex flex-column align-items-start justify-content-start mx-4">
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: 10,
                      }}
                    >
                      Find products to sell
                    </span>
                    <span style={{ fontSize: "12px" }}>
                      Have dropshipping or print on demand products shipped
                      directly from the supplier to your customer.
                      <br />
                      and only pay for what you sell.
                    </span>
                    <button className="btn btn-secondary my-3">
                      <b>Browse Product Sourcing apps</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
