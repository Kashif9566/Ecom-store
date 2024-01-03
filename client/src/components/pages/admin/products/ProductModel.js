import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../../../../redux/slices/product";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const ProductModel = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user.token;
  const handleDelete = async (productId) => {
    try {
      await dispatch(deleteProduct({ token, productId }));
      dispatch(fetchProducts(token));
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product");
    }
  };

  return (
    <div>
      <div className="card-body d-flex align-items-center justify-content-between">
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
          <div style={{ fontSize: "15px" }}>
            <b>{product.name}</b>
          </div>
          <div>
            <b>Rs. {product.price}</b>
          </div>
        </div>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
      <ToastContainer />
    </div>
  );
};

export default ProductModel;
