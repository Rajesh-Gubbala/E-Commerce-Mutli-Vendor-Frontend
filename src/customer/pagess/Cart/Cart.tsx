import React, { useEffect, useState } from "react";
import CartItem from "./CartItemCard";
import { Close, LocalOffer } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import PricingCart from "./PricingCart";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserCart } from "../../../State/Customer/CartSlice";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
  }, []);

  console.log("Cart ",cart)

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Cart Items Section */}
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item) => (
            <CartItem  item={item} />
          ))}
        </div>

        {/* Coupons Section */}
        <div className="col-span-1 text-sm space-y-3">
          <div className="border rounded-md px-5 py-3 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
              <span>Apply Coupons</span>
            </div>

            {/* Coupon Input and Button (Fixed Alignment) */}
            {true ? (
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  placeholder="Coupon code"
                  size="small"
                  variant="outlined"
                />
                <Button size="small" variant="contained">
                  Apply
                </Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-3 items-center">
                  <span className="">RAJESH30 Applied</span>
                  <IconButton size="small">
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
          <div className="border rounded-md">
            <PricingCart />
            <div className="p-5">
              <Button
                onClick={() => navigate("/checkout")}
                fullWidth
                variant="contained"
                sx={{ py: "11px" }}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
