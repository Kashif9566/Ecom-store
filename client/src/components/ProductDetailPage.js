import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById, singleProductDetail } from "../redux/slices/product";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user.token;
  const product = useSelector(singleProductDetail);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById({ token, productId }));
  }, [dispatch, token, productId]);

  if (!product) {
    return null;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const inputQuantity = parseInt(e.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setQuantity(inputQuantity);
    }
  };

  return (
    <div className="container d-flex align-item-center justify-content-between mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-1">
            <img
              src={`http://localhost:8000/${product.image}`}
              className="card-img-top"
              alt={`${product.name} Image`}
              height={"100%"}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="mx-5">
              <h3
                className="mt-4"
                style={{
                  color: "#1e2d7d",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                {product.name}
              </h3>
              <div className="container d-flex align-item-center justify-content-between mt-3">
                <div
                  style={{
                    color: "#1e2d7d",
                    display: "block",
                  }}
                >
                  TechShop.com
                </div>
                <div className="dflex">
                  <FontAwesomeIcon className="mx-1" icon={faFacebook} />
                  <FontAwesomeIcon className="mx-1" icon={faInstagram} />
                  <FontAwesomeIcon className="mx-1" icon={faPinterest} />
                  <FontAwesomeIcon className="mx-1" icon={faTwitter} />
                </div>
              </div>
              <hr />
              <div className="d-flex flex-column align-items-start ml-10">
                <div
                  className="d-flex mt-4"
                  style={{
                    fontSize: "15px",
                    fontWeight: "100%",
                    color: "#1e2d7d",
                  }}
                >
                  <h5>Color:</h5>
                  <div className="card mx-4 p-1">{product.color}</div>
                </div>
                <div className="d-flex align-item-center mt-4">
                  <h5
                    style={{
                      color: "#1e2d7d",
                    }}
                  >
                    Price:
                  </h5>
                  <div className="mx-3" style={{ fontSize: "30px" }}>
                    Rs. {product.price}
                  </div>
                </div>
                <div
                  className="d-flex mt-3 align-items-center"
                  style={{ fontSize: "15px", fontWeight: "100%" }}
                >
                  <h5 style={{ color: "#1e2d7d" }}>Quantity:</h5>
                  <div className="card p-1 mx-4" style={{ width: "200px" }}>
                    <div className="d-flex align-items-center mt-2">
                      <button
                        onClick={handleDecrement}
                        className="btn btn-secondary"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleInputChange}
                        className="form-control mx-2"
                        min="1"
                      />
                      <button
                        onClick={handleIncrement}
                        className="btn btn-secondary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container d-flex align-item-center justify-content-between mt-5 mb-4">
                <button
                  className="p-2"
                  style={{
                    width: "200px",
                    backgroundColor: "#ebf9fc",
                    border: "0px",
                  }}
                >
                  Add to Cart
                </button>
                <Link to={"/checkouts"}>
                  <button
                    className="p-2"
                    style={{
                      width: "200px",
                      backgroundColor: "#1e2d7d",
                      color: "white",
                      border: "0px",
                    }}
                  >
                    Buy it Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-2 mt-3">
            <div className="card-header">
              <h3
                style={{
                  color: "#1e2d7d",
                }}
              >
                Description
              </h3>
            </div>
            <div className="card-body d-flex">
              <p> {product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
