import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchedCatogories,
  selectCategory,
} from "../../redux/slices/categorySlice";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const user = (state) => state.user;
  const token = user.token;
  useEffect(() => {
    dispatch(fetchCategories(token));
  }, [dispatch, token]);

  const categories = useSelector(fetchedCatogories);

  const handleCategorySelect = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <div
      className="d-flex justify-content-center my-3"
      style={{ color: "#677279", backgroundColor: "rgb(243, 245, 246)" }}
    >
      <ul className="list-unstyled d-flex">
        {categories.map((category) => (
          <li
            key={category.id}
            className="mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleCategorySelect(category.id)}
          >
            <Link
              to={`/category/${category.id}`}
              style={{ textDecoration: "none" }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
