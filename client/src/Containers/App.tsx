import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "../Components/Layout/index";
import { Home, NotFound, MenuItemDetails, ShoppingCart, Login, Register } from "../Pages/index";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";

function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery("a11c959d-bc03-4d89-90bf-98ae62bc292b");

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result.cartItems));
    }
  }, [data]);

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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
