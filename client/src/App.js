import "./App.css";
import RegistrationPage from "./components/pages/RegistrationPage";
import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/cart/CartPage";
import CategoryProducts from "./components/category/CategoryProducts";
import Checkouts from "./components/checkout/Checkouts";
import Dashboard from "./components/pages/admin/dashboard/Dashboard";
import Products from "./components/pages/admin/products/Products";
import AllProducts from "./components/pages/admin/products/AllProducts";
import AddProduct from "./components/pages/admin/products/AddProduct";
import Categories from "./components/category/Categories";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      dispatch(setUser(userInfo));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<RegistrationPage />} />
        {user ? (
          user.role === "admin" ? (
            <>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/allProducts" element={<AllProducts />} />
              <Route
                path="/admin/products/addProduct"
                element={<AddProduct />}
              />
              <Route path="/admin/categories" element={<Categories />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/productDetails/:productId"
                element={<ProductDetailPage />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/category/:categoryId"
                element={<CategoryProducts />}
              />
              <Route path="checkouts" element={<Checkouts />} />{" "}
            </>
          )
        ) : (
          <Route path="/*" element={<RegistrationPage />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
