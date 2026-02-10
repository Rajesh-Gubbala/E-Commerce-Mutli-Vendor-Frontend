import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, Deal, DealsState } from "../../Typess/DealType";
import { api } from "../../Configg/Api";




const initialState: DealsState = {
    deals: [],
    loading: false,
    error: null,
    dealCreated: false,
    dealUpdated: false,
  };


  export const createDeal = createAsyncThunk(
    "deals/createDeal",
    async (deal: any, { rejectWithValue }) => {
      try {
        const response = await api.post("/admin/deals", deal, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
  
        console.log("created deal", response.data);
        return response.data;
      } catch (error: any) {
        console.log("error", error.response);
        return rejectWithValue(
          error.response?.data?.message || "Failed to create deal"
        );
      }
    }
  );
  


  export const getAllDeals = createAsyncThunk(
    "deals/getAllDeals",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.get("/admin/deals", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
  
        console.log("get all deal", response.data);
        return response.data;
      } catch (error: any) {
        console.log("error", error.response);
        return rejectWithValue(
          error.response?.data?.message || "Failed to create deal"
        );
      }
    }
  );
  






  // Create async thunk for deleting a deal
export const deleteDeal = createAsyncThunk<ApiResponse, number>(
    "deals/deleteDeal",
    async (id: number, { rejectWithValue }) => {
      try {
        const response = await api.delete(`/admin/deals/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
  
        return response.data;
      } catch (error: any) {
        console.log("error", error.response);
        return rejectWithValue(
          error.response?.data?.message || "Failed to delete deal"
        );
      }
    }
  );



  const dealsSlice = createSlice({
    name: "deals",
    initialState,
    reducers: {
      resetDealState: (state) => {
        state.dealCreated = false;
        state.dealUpdated = false;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Create Deal
        .addCase(createDeal.pending, (state) => {
          state.loading = true;
          state.dealCreated = false;
          state.error = null;
        })
        .addCase(createDeal.fulfilled, (state, action:PayloadAction<Deal>) => {
          state.loading = false;
          state.dealCreated = true;
          state.deals.push(action.payload);
        })
        .addCase(createDeal.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
  
        // Get All Deals
        .addCase(getAllDeals.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllDeals.fulfilled, (state, action) => {
          state.loading = false;
          state.deals = action.payload;
        })
        .addCase(getAllDeals.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
  
        // Delete Deal
        .addCase(deleteDeal.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteDeal.fulfilled, (state, action) => {
          state.loading = false;
          state.deals = state.deals.filter((deal) => deal.id !== action.meta.arg);
        })
        .addCase(deleteDeal.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  

  export default dealsSlice.reducer;
  