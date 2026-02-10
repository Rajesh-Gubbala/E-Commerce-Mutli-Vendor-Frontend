import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Coupon, CouponState } from "../../Typess/CouponType";
import { api } from "../../Configg/Api";

const API_URL = "/api/coupons";

// Async thunks
export const createCoupon = createAsyncThunk<
  Coupon,
  { coupon: any; jwt: string },
  { rejectValue: string }
>("coupon/createCoupon", async ({ coupon, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.post(`${API_URL}/admin/create`, coupon, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    console.log("created coupon", response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to create coupon");
  }
});

// Apply or Remove Coupon
export const applyCoupon = createAsyncThunk<
  any,
  { apply: string; code: string; orderValue: number; jwt: string },
  { rejectValue: string }
>(
  "coupon/applyCoupon",
  async ({ apply, code, orderValue, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `${API_URL}/apply`,
        {},
        {
          params: { apply, code, orderValue },
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to apply coupon");
    }
  }
);

// Delete Coupon
export const deleteCoupon = createAsyncThunk<
  string,
  { id: number; jwt: string },
  { rejectValue: string }
>("coupon/deleteCoupon", async ({ id, jwt }, { rejectWithValue }) => {
  try {
    await api.delete(`${API_URL}/admin/delete/${id}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return "Coupon deleted successfully";
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to delete coupon");
  }
});

export const getAllCoupons = createAsyncThunk<
  Coupon[],
  { jwt: string },
  { rejectValue: string }
>("coupon/getAllCoupons", async ({ jwt }, { rejectWithValue }) => {
  try {
    const response = await api.get(`${API_URL}/admin/all`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to fetch coupons");
  }
});



const initialState: CouponState = {
    coupons: [],
    loading: false,
    error: null,
    cart: null, // Ensure 'cart' is initialized properly
    couponCreated: false, // Change 'null' to 'false'
    couponApplied: false, // Change 'null' to 'false'
  };
  
  
  const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(applyCoupon.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(applyCoupon.fulfilled, (state, action) => {
          state.loading = false;
          state.cart = action.payload; // Ensure cart gets updated properly
          state.couponApplied = true;
        })
        .addCase(applyCoupon.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
          state.couponApplied = false;
        })
  
        .addCase(createCoupon.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createCoupon.fulfilled, (state, action) => {
          state.loading = false;
          state.coupons.push(action.payload);
          state.couponCreated = true;
        })
        .addCase(createCoupon.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
          state.couponCreated = false;
        })
  
        .addCase(deleteCoupon.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteCoupon.fulfilled, (state, action) => {
          state.loading = false;
          state.coupons = state.coupons.filter(
            (coupon) => coupon.id !== action.meta.arg.id
          );
        })
        .addCase(deleteCoupon.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
  
        .addCase(getAllCoupons.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllCoupons.fulfilled, (state, action) => {
          state.loading = false;
          state.coupons = action.payload;
        })
        .addCase(getAllCoupons.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  export default couponSlice.reducer;
  
  
