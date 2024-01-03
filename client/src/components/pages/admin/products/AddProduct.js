import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchedCatogories,
} from "../../../../redux/slices/categorySlice";
import Nav from "../../../admin/Nav";
import Sidebar from "../../../admin/Sidebar";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [profit, setProfit] = useState("");
  const [margin, setMargin] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(fetchedCatogories);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const calculateProfitAndMargin = () => {
    const Price = parseFloat(price);
    const Cost = parseFloat(cost);

    if (!isNaN(Price) && !isNaN(Cost)) {
      const calculatedProfit = Price - Cost;
      const calculatedMargin = (calculatedProfit / Cost) * 100;

      setProfit(calculatedProfit.toFixed(2));
      setMargin(calculatedMargin.toFixed(2));
    } else {
      setProfit("");
      setMargin("");
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    calculateProfitAndMargin();
  };

  const handleCostChange = (e) => {
    setCost(e.target.value);
    calculateProfitAndMargin();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !price || !category || !image) {
        toast.error("Please Provide necessary Information");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("color", color);
      formData.append("brand", brand);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("image", image);
      formData.append("cost", cost);
      formData.append("profit", profit);
      formData.append("margin", margin);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:8000/product",
        formData,
        config
      );
      if (data) {
        setName("");
        setBrand("");
        setColor("");
        setDescription("");
        setCategory("");
        setImage("");
        setPrice("");
        setCost("");
        setProfit("");
        setMargin("");
        toast.success("Product created successfully!");
        console.log(data);
      } else {
        toast.error("Error creating product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Error creating product");
    }
  };

  return (
    <div className="row">
      <div className="col-md-2 col-lg-3 fixed-sidebar">
        <Sidebar />
      </div>

      <div className="col-md-10 col-lg-9">
        <Nav />
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-12">
            <div className="my-4 d-flex mx-4">
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                Add Product
              </span>
            </div>

            <form className="form row" onSubmit={handleSubmit}>
              <div className="col-lg-8">
                <div className="card">
                  <div className="d-flex flex-column align-items-start my-3 mx-4">
                    <label className="mb-2">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Product Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-start my-2 mx-4">
                    <label className="mb-2">Description</label>
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={10}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="card my-3">
                  <div className="d-flex flex-column align-items-start my-3 mx-4">
                    <label className="mb-2">
                      <b>Media</b>
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="card my-3">
                  <div className="d-flex mx-3 mt-3">
                    <b>Pricing</b>
                  </div>
                  <div className="d-flex flex-column align-items-start my-3 mx-4">
                    <label className="mb-2">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rs 0.00"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-start my-3 mx-4">
                        <label className="mb-2">Cost Per Item</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Rs 0.00"
                          value={cost}
                          onChange={handleCostChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-start my-3 mx-4">
                        <label className="mb-2">Profit</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="--"
                          value={profit}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-start my-3 mx-4">
                        <label className="mb-2">Margin</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="--"
                          value={margin}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="d-flex flex-column align-items-start mx-3 my-1">
                    <label className="my-2">
                      <b>Brand Name</b>
                    </label>
                    <input
                      className="form-control my-2"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                </div>
                <div className="card my-3">
                  <div className="d-flex mx-3 mt-3">
                    <b>Product Organization</b>
                  </div>
                  <div className="d-flex flex-column align-items-start my-3 mx-4">
                    <label className="mb-2">Product Category</label>
                    <select
                      className="form-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex flex-column align-items-start my-1 mx-4 mb-2">
                    <label className="mb-2">Colors</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="White, Black"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-secondary d-flex align-items-start mx-2"
                >
                  Save
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
