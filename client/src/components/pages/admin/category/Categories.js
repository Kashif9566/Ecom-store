// Categories.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../redux/slices/categorySlice";
import CategoryModel from "./CategoryModel";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Categories = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user.token;

  const categories = useSelector((state) => state.categories.categories);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name) {
        toast.error("Please provide the name of the category");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:8000/category",
        { name },
        config
      );

      if (data) {
        dispatch(fetchCategories(token));
        toast.success("Category created successfully");
        setName("");
      } else {
        toast.error("Error creating category");
      }
    } catch (error) {
      console.error("Error creating category:", error);
      toast.error("Error creating category");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-4">
          <h2 className="font-weight-bold">Categories</h2>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-start justify-content-start mx-4">
                <div className="d-flex mb-2">
                  <h5 className="mr-3">Total Categories:</h5>
                  <b style={{ fontSize: "20px" }}>{categories.length}</b>
                </div>
                <form onSubmit={handleSubmit} className="d-flex">
                  <input
                    type="text"
                    className="form-control mr-2"
                    placeholder="Gaming, Tech"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    style={{ width: "200px" }}
                  >
                    <b>Add Category</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <div className="card">
            <div className="card-header">
              <b className="my-2">Available Categories</b>
            </div>
            <div className="card-body">
              {categories.map((category) => (
                <CategoryModel key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Categories;
