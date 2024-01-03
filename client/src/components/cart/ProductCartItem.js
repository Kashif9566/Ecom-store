import React, { useState, useEffect } from "react";
import { selectProducts, updateQuantity } from "../../redux/slices/product";
import { useSelector, useDispatch } from "react-redux";

const ProductCartItem = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === productId);

  useEffect(() => {
    dispatch(updateQuantity({ productId, quantity }));
  }, [dispatch, productId, quantity]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateQuantity({ productId, newQuantity }));
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateQuantity({ productId, newQuantity }));
    }
  };

  const handleInputChange = (e) => {
    // const inputQuantity = parseInt(e.target.value, 10);
    // if (!isNaN(inputQuantity) && inputQuantity >= 1) {
    //   setQuantity(inputQuantity);
    //   dispatch(updateQuantity({ productId, quantity: inputQuantity }));
    // }
  };

  return (
    <>
      <div className="card-body d-flex align-item-center justify-content-between">
        <img
          src={`http://localhost:8000/${product.image}`}
          className="img-thumbnail"
          alt={`${product.name} Image`}
          style={{ width: "100px", height: "100px" }}
        />

        <div className="d-flex flex-column">
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
          <div>
            <b>{product.name}</b>
          </div>
          <div>
            <b>Rs. {product.price}</b>
          </div>
        </div>
        <div>
          <div className="card p-1 mx-4" style={{ width: "200px" }}>
            <div className="d-flex align-items-center mt-2">
              <button onClick={handleDecrement} className="btn btn-secondary">
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                className="form-control mx-2"
                min="1"
              />
              <button onClick={handleIncrement} className="btn btn-secondary">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProductCartItem;
