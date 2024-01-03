import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/slices/cartSlice";
import { selectProducts } from "../../redux/slices/product";
import CheckoutProductModel from "./CheckoutProductModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Checkouts = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);

  const user = useSelector((state) => state.user);
  const token = user.token;
  const userId = user.id;
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (cartItems.length === 0) {
        toast.error("Please add products to your cart before placing an order");
        return;
      }

      if (!username || !address || !phoneNumber || !paymentMethod) {
        toast.error("Please provide all credentials for placing order");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const productsInfo = cartItems.map((cartItem) => ({
        productId: cartItem.id,
        quantity: cartItem.quantity,
      }));

      const { data } = await axios.post(
        `http://localhost:8000/user/${userId}/order`,
        {
          email,
          username,
          address,
          phoneNumber,
          country,
          city,
          postalCode,
          paymentMethod,
          products: productsInfo,
        },
        config
      );
      if (data) {
        setEmail("");
        setUsername("");
        setAddress("");
        setPhoneNumber("");
        setCountry("");
        setCity("");
        setPostalCode("");
        setPaymentMethod("");

        toast.success("Order Created Sucessfully");
      } else {
        console.error("error creating order");
      }
    } catch (error) {
      console.error("error creating order", error);
      toast.error("error creating order");
    }
  };
  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const product = products.find((p) => p.id === item.id);
      if (product) {
        acc += product.price * item.quantity;
      }
      return acc;
    }, 0);
  }, [cartItems, products]);
  return (
    <div>
      <div className="d-flex align-item-center justify-content-center my-4">
        <h3>TechShop</h3>
      </div>
      <hr />

      <div className="container">
        <div className="row">
          <div
            className="col-md-7"
            style={{
              borderRadius: "0px",
              borderRight: "1px solid #ccc",
            }}
          >
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <div className="d-flex align-item-center justify-content-between">
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    Contact
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      marginTop: "15px",
                      color: "#677279",
                      marginRight: "10px",
                    }}
                  >
                    Have an account? Log in
                  </p>
                </div>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Email or Mobile phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex align-item-center mt-4">
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Delivery
                </p>
              </div>
              <div className="col-12">
                <select
                  id="inputState"
                  className="form-select"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option selected>Country/Region</option>
                  <option>Pakistan</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="d-flex align-items-start justify-content-start mt-4 flex-column">
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  Payment Method
                </p>
                <span style={{ fontSize: "13px", color: "#677279" }}>
                  All transactions are secure and encrypted.
                </span>

                <div className="form-check form-control d-flex align-items-center justify-content-start mt-2">
                  <input
                    className="form-check-input mx-2 "
                    type="radio"
                    name="paymentMethod"
                    id="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={handlePaymentMethod}
                  />
                  <label className="form-check-label" htmlFor="cashOnDelivery">
                    Cash on Delivery(COD)
                  </label>
                </div>

                <div className="form-check form-control d-flex align-items-center justify-content-start">
                  <input
                    className="form-check-input mx-2"
                    type="radio"
                    name="paymentMethod"
                    id="bankDeposit"
                    checked={paymentMethod === "bankDeposit"}
                    onChange={handlePaymentMethod}
                  />
                  <label className="form-check-label " htmlFor="bankDeposit">
                    Bank Deposit
                  </label>
                </div>
              </div>
              {cartItems.map((cartItem) => (
                <>
                  <input
                    key={cartItem.id}
                    type="hidden"
                    name={`products[${cartItem.id}][productId]`}
                    value={cartItem.id}
                  />
                  <input
                    type="hidden"
                    name={`products[${cartItem.id}][quantity]`}
                    value={cartItem.quantity}
                  />
                </>
              ))}

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{
                    backgroundColor: "#7ad8ea",
                    border: "0px",
                    fontWeight: "bold",
                    padding: 10,
                    margin: 10,
                    width: "80%",
                  }}
                >
                  Complete Order
                </button>
              </div>
            </form>
            <hr />
            <ul className="d-flex align-items-center justify-content-between">
              <div>Refund Policy</div>
              <div>Shipping Policy</div>
              <div>Privacy Policy</div>
              <div>Terms of service</div>
            </ul>
          </div>

          <div className="col-md-5" style={{ borderRadius: "0px" }}>
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="mb-2">
                <CheckoutProductModel
                  product={products.find((p) => p.id === cartItem.id)}
                  quantity={cartItem.quantity}
                />
              </div>
            ))}
            <div className="d-flex align-items-center justify-content-between mx-3 mt-5">
              <div>Shipping</div>
              <div>Free</div>
            </div>
            <div className="d-flex align-items-center justify-content-between mx-3 mt-1">
              <div style={{ fontSize: "20px" }}>
                <b>Total</b>
              </div>
              <div>
                <span style={{ fontSize: "13px", color: "#677279" }}>PKR </span>

                <b style={{ fontSize: "20px" }}>{`Rs. ${totalAmount.toFixed(
                  2
                )}`}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkouts;
