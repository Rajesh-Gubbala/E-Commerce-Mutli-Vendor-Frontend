// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { thunk } from "redux-thunk";
// import sellerSlice from "./Seller/SellerSlice"
// import sellerProductSlice from "./Seller/SellerProductSlice"
// import productSlice from "./Customer/ProductSlice"
// import authSlice from "./AuthSlice"
// import cartSlice from "./Customer/CartSlice"
// import orderSlice from "./Customer/OrderSlice"
// import wishlistSlice from "./Customer/WishList"
// import SellerOrderSlice from "./Seller/SellerOrderSlice"
// import TransactionSlice from "./Seller/TransactionSlice"
// import adminSlice from "./Admin/AdminSlice"
// import customerSlice from "./Customer/CustomerSlice"
// import DealSlice from "./Admin/DealSlice"

// const rootReducer = combineReducers({

//     seller:sellerSlice,
//     sellerProduct:sellerProductSlice,
//     product:productSlice,
//     auth:authSlice,
//     cart:cartSlice,
//     order:orderSlice,
//     wishlist:wishlistSlice,
//     customer:customerSlice,

//     //seller slice
//     sellerOrder:SellerOrderSlice,
//     transactions:TransactionSlice,
//     /////
//   admin:adminSlice,
//   deal:DealSlice

// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export default store;


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sellerSlice from "./Seller/SellerSlice";
import sellerProductSlice from "./Seller/SellerProductSlice";
import productSlice from "./Customer/ProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./Customer/CartSlice";
import orderSlice from "./Customer/OrderSlice";
import wishlistSlice from "./Customer/WishList";
import SellerOrderSlice from "./Seller/SellerOrderSlice";
import TransactionSlice from "./Seller/TransactionSlice";
import adminSlice from "./Admin/AdminSlice";
import customerSlice from "./Customer/CustomerSlice";
import DealSlice from "./Admin/DealSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  customer: customerSlice,

  // seller slices
  sellerOrder: SellerOrderSlice,
  transactions: TransactionSlice,
  
  // admin slices
  admin: adminSlice,
  deal: DealSlice
});

const store = configureStore({
  reducer: rootReducer,
  // Thunk is included by default in Redux Toolkit's getDefaultMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
