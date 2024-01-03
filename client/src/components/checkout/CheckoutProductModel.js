import React from "react";

const CheckoutProductModel = ({ product, quantity }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="row">
      <div className="col md-12 d-flex align-items-center justify-content-between mx-1">
        <img
          src={`http://localhost:8000/${product.image}`}
          className="card-img-top"
          alt={`${product.name} Image`}
          style={{
            flex: "1",
            objectFit: "cover",
            width: "100px",
            height: "100px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        />
        <span style={{ fontSize: "12px", fontFamily: "sans-serif" }}>
          {product.name}
        </span>

        <p style={{ fontSize: "13px", fontWeight: "bold" }}>
          Rs. {product.price}.00
        </p>
      </div>
    </div>
  );
};

export default CheckoutProductModel;
