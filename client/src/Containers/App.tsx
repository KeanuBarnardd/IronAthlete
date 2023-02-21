import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "../Components/Layout/index";
import {
  Home,
  NotFound,
  MenuItemDetails,
  ShoppingCart,
  Login,
  Register,
  AuthenticationTest,
  AccessDenied,
  AuthenticationTestAdmin,
  Payment,
} from "../Pages/index";

import { useDispatch, useSelector } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";
import jwt_decode from "jwt-decode";
import userModel from "./../Interfaces/userModel";
import { setLoggedInUser } from "../Storage/Redux/userAuthSlice";
import { RootState } from "../Storage/Redux/store";

function App() {
  const dispatch = useDispatch();
  const userData: userModel = useSelector((state: RootState) => state.userAuthStore);
  const { data, isLoading } = useGetShoppingCartQuery(userData.id);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const { fullName, id, email, role }: userModel = jwt_decode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/authentication" element={<AuthenticationTest />} />
          <Route path="/authorization" element={<AuthenticationTestAdmin />} />
          <Route path="/accessDenied" element={<AccessDenied />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
