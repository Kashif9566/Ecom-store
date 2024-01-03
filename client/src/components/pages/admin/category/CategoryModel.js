import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  fetchCategories,
} from "../../../../redux/slices/categorySlice";

const CategoryModel = ({ category }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user.token;

  const handleDelete = async (categoryId) => {
    try {
      await dispatch(deleteCategory({ token, categoryId }));
      dispatch(fetchCategories(token));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mx-4 my-2">
        <div>
          <b>{category.name}</b>
        </div>
        <div>{category.products}</div>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(category.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CategoryModel;
