import React, { useEffect } from "react";
import {
  fetchProductsOfCategory,
  fetchedProductsOfCategory,
  selectSelectedCategory,
} from "../../redux/slices/categorySlice";
import Nav from "../Nav";
import Categories from "./Categories";
import ProductModel from "../ProductModel";
import FilterModel from "./FilterModel"; // Import your FilterModel component
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CategoryProducts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user.token;
  const categoryId = useSelector(selectSelectedCategory);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductsOfCategory({ categoryId, token }));
  }, [dispatch, categoryId, token]);

  const products = useSelector(fetchedProductsOfCategory);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Nav />
      <Categories />
      <div className="container">
        <div className="row mt-3">
          {products && products.length > 0 ? (
            <>
              <div className="col-md-3">
                <FilterModel />
              </div>
              <div className="col-md-8">
                {products.map((product) => (
                  <div key={product.id} className="col-md-3 mb-4">
                    <ProductModel product={product} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-5">
              <p>This collection is empty</p>
              <button className="btn btn-primary" onClick={() => handleClick()}>
                Go to Homepage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
