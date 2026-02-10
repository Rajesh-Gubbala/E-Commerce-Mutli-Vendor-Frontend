import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTables from '../admin/Pagess/Seller/SellersTables'
import Coupon from '../admin/Pagess/Coupon/Coupon'
import AddNewCouponForm from '../admin/Pagess/Coupon/AddNewCouponForm'
import GridTable from '../admin/Pagess/HomePage/GridTable'
import ElectronicTable from '../admin/Pagess/HomePage/ElectronicTable'
import ShopByCategoryTable from '../admin/Pagess/HomePage/ShopByCategoryTable'
import Deal from '../admin/Pagess/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>

            <Route path="/" element={<SellersTables/>} />
            <Route path="/coupon" element={<Coupon/>} />
            <Route path="/add-coupon" element={<AddNewCouponForm/>} />
            <Route path="/home-grid" element={<GridTable/>} />
            <Route path="/electronics-category" element={<ElectronicTable/>} />
            <Route path="/shop-by-category" element={<ShopByCategoryTable/>} />
            <Route path="/deals" element={<Deal/>} />

        </Routes>
    </div>
  )
}

export default AdminRoutes