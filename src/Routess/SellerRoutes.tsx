import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellerDashboard from '../seller/Pagesss/SellerDashboard/SellerDashboard'
import Dashboard from '../seller/Pagesss/SellerDashboard/Dashboard'
import Product from '../customer/pagess/Product/Product'
import Products from '../seller/Pagesss/Products/Products'
import AddProduct from '../seller/Pagesss/Products/AddProduct'
import Profile from '../seller/Pagesss/Account/Profile'
import Orders from '../seller/Components/SellerDrawerList/Orders/Orders'
import Payment from '../seller/Pagesss/Payment/Payment'
import Transaction from '../seller/Pagesss/Payment/Transaction'

const SellerRoutes = () => {
  return (
    <div>
       <Routes>
  <Route path='/' element={<Dashboard />} />
  <Route path='/products' element={<Products />} />
  <Route path='/add-product' element={<AddProduct />} />
  <Route path='/orders' element={<Orders />} />
  <Route path='/account' element={<Profile />} />
  <Route path='/payment' element={<Payment />} />
  <Route path='/transaction' element={<Transaction />} />
</Routes>
    </div>
  )
}

export default SellerRoutes