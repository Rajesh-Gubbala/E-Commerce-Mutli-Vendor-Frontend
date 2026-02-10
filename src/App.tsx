import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import customeTheme from "./Theme/customeTheme";
import Navbar from "./customer/components/Navbar/Navbar";
// import { Home } from "@mui/icons-material";
import Product from "./customer/pagess/Product/Product";
import ProductDetails from "./customer/pagess/Page Details/ProductDetails";
import Review from "./customer/pagess/Review/Review";
import Cart from "./customer/pagess/Cart/Cart";
import Checkout from "./customer/pagess/Checkout/Checkout";
import Account from "./customer/pagess/Account/Account";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./customer/pagess/Home/Home";
import BecomeSeller from "./customer/pagess/Become Seller/BecomeSeller";
import SellerDashboard from "./seller/Pagesss/SellerDashboard/SellerDashboard";
import Dashboard from "./admin/Pagess/Dashboard/Dashboard";
import AdminDashboard from "./admin/Pagess/Dashboard/Dashboard";
import {  fetchProducts } from "./State/fetchProduct";
import store, { useAppDispatch, useAppSelector } from "./State/Store";
import { fetchSellerProfile } from "./State/Seller/SellerSlice";
import Auth from "./customer/pagess/Auth/Auth";
import { fetchUserProfile } from "./State/AuthSlice";
import PaymentSuccess from "./customer/pagess/PaymentSuccess";
import WishList from "./customer/Wishlist/WishList";
import { createHomeCategories } from "./State/Customer/CustomerSlice";
import { homeCategories } from "./Data/HomeCategories";

function App() {
 const dispatch=useAppDispatch();
 const {seller,auth}=useAppSelector(store=>store)
 const navigate=useNavigate()

 useEffect(()=>{
  dispatch(fetchSellerProfile(localStorage.getItem("jwt") ||""))
dispatch(createHomeCategories(homeCategories))
 },[])

 useEffect(()=>{
  if(seller.profile){
    navigate("/seller")
  }
 },[seller.profile])

 useEffect(()=>{
  dispatch(fetchUserProfile({jwt:auth.jwt || localStorage.getItem("jwt")}))
 },[auth.jwt])

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
       
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Review/> */}
        {/* <Cart/> */}

        {/* <Checkout /> */}
        {/* <Account/> */}
         <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/products/:category" element={<Product/>}/>
          <Route path="/reviews/:productId" element={<Review/>}/>
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/payment-success/:orderId" element={<PaymentSuccess/>}/>
          <Route path="/become-seller" element={<BecomeSeller/>}/>
          <Route path="/account/*" element={<Account/>}/>
          <Route path="/seller/*" element={<SellerDashboard/>}/>
          <Route path="/admin/*" element={<AdminDashboard/>}/>

        </Routes>

      </div>
    </ThemeProvider>
  );
}

export default App;
