import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
const ProductModel = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const handleAddToCart = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  return (
    <div
      className="card card d-flex flex-column justify-content-between"
      //style={{ height: "100%" }}
    >
      <Link
        to={`/productDetails/${product.id}`}
        style={{ textDecoration: "none" }}
      >
        <img
          src={`http://localhost:8000/${product.image}`}
          className="card-img-top"
          alt={`${product.name} Image`}
          style={{
            flex: "1",
            objectFit: "cover",
          }}
        />
        <div
          className="card-body d-flex flex-column align-items-start ml-10"
          style={{ overflow: "hidden" }}
        >
          <div
            className="mt-0"
            style={{
              color: "#677279",
              fontStyle: "sans-serif",
              fontSize: "16px",
              lineHeight: "30px",
            }}
          >
            TechShop.com
          </div>

          {product.name.length > 30 ? (
            <p
              className="card-title d-flex align-items-start justify-content-start"
              style={{
                color: "#1e2d7d",
                fontWeight: "bold",
                display: "block",
                fontSize: "14px",
                marginTop: "5px",
              }}
            >
              {product.name}
            </p>
          ) : (
            <p
              className="card-title d-flex align-items-start justify-content-start"
              style={{
                fontWeight: "bold",
                display: "block",
                fontSize: "14px",
                marginTop: "5px",
                color: "#1e2d7d",
              }}
            >
              {product.name}
            </p>
          )}

          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Rs: {product.price}
          </span>
        </div>
      </Link>
      <div className="card-footer">
        <button
          className="btn btn-primary"
          onClick={() => handleAddToCart(product.id)}
          style={{ backgroundColor: "#7ad8ea", border: "0px" }}
        >
          <b> Add to Cart</b>
        </button>
      </div>
    </div>
  );
};

export default ProductModel;
