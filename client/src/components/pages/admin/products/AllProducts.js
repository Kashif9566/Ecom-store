import React, { useEffect } from "react";
import {
  selectProducts,
  fetchProducts,
} from "../../../../redux/slices/product";
import { useSelector, useDispatch } from "react-redux";
import ProductModel from "./ProductModel";
import Nav from "../../../admin/Nav";
import Sidebar from "../../../admin/Sidebar";

const AllProducts = () => {
  const user = useSelector((state) => state.user);
  const token = user.token;
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(token));
  }, [dispatch, token]);

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <Nav />
        <div className="container">
          <div className="row" style={{ marginTop: "100px" }}>
            {products.map((product) => (
              <div key={product.id} className="col-md-11 mb-4">
                <React.Fragment>
                  <ProductModel product={product} />
                </React.Fragment>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
