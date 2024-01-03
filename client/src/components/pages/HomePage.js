import React, { useEffect } from "react";
import Nav from "../Nav";
import { selectProducts, fetchProducts } from "../../redux/slices/product";
import { useSelector, useDispatch } from "react-redux";
import ProductModel from "../ProductModel";
import Categories from "../category/Categories";
import Footer from "../footer/Footers";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const token = user.token;
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(token));
  }, [dispatch, token]);

  return (
    <div>
      <Nav />
      <Categories />
      <div className="container">
        <div className="row mt-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <React.Fragment>
                <ProductModel product={product} />
              </React.Fragment>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
