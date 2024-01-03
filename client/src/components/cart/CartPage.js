import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/slices/cartSlice";
import { selectProducts } from "../../redux/slices/product";
import ProductCartItem from "./ProductCartItem";
import { Link } from "react-router-dom";
const CartPage = () => {
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);
  const [loading, setLoading] = useState(false);

  const totalAmount = useMemo(() => {
    setLoading(true);
    const total = cartItems.reduce((acc, item) => {
      const product = products.find((p) => p.id === item.id);
      if (product) {
        acc += product.price * item.quantity;
      }
      return acc;
    }, 0);
    setLoading(false);
    return total;
  }, [cartItems, products]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Cart</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex align-item-center justify-content-between">
              <p className="mt-2">
                <b>Product</b>
              </p>
              <p className="mt-2">
                <b>Quantity</b>
              </p>
            </div>

            {cartItems.length > 1 ? (
              cartItems.map((cartItem) => (
                <div key={cartItem.id}>
                  <ProductCartItem
                    productId={cartItem.id}
                    quantity={cartItem.quantity}
                  />
                </div>
              ))
            ) : (
              <>
                <div className="my-4">
                  <p>No Products added to card!</p>
                  <Link to={"/"} className="btn btn-primary">
                    Go to Homepage
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="d-flex align-item-center justify-content-between mx-4 mt-4">
              <h4>Total</h4>
              <div>
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <b>{`Rs. ${totalAmount.toFixed(2)}`}</b>
                )}
              </div>
            </div>
            <hr />
            <div style={{ color: "#677279" }}>Other Instructions</div>
            <hr />
            <div className="my-2" style={{ color: "#677279" }}>
              Taxes and shipping calculated at checkout
            </div>

            <Link
              className="m-3 p-2"
              to={"/checkouts"}
              style={{
                backgroundColor: "#1e2d7d",
                color: "white",
                border: "0px",
                textDecoration: "none",
              }}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
