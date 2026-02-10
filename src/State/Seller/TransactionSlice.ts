import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Order } from "../../Typess/OrderType";
import { Seller } from "../../Typess/SellerType";
import { User } from "../../Typess/UserType";
import { api } from "../../Configg/Api";
import { data } from "react-router-dom";


export interface Transaction{
    id:number;
    customer:User;
    order:Order;
    seller:Seller;
    date:string;
}

 export interface TransactionState {
    transactions: Transaction[];
    transaction: Transaction | null;
    loading: boolean;
    error: string | null;
  }
  
  // Initial state
  export const initialState: TransactionState = {
    transactions: [],
    transaction: null,
    loading: false,
    error: null,
  };


  export const fetchTransactionsBySeller = createAsyncThunk<
  Transaction[],
  string,
  { rejectValue: string }
>('transactions/fetchTransactionsBySeller', async (jwt, { rejectWithValue }) => {
  try {
    const response = await api.get('/api/transactions/seller', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("fetchTransactionsBySeller:::", response.data);

    console.log("...................",data)

    return response.data;
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Failed to fetch transactions');
  }
});

export const fetchAllTransactions = createAsyncThunk<
  Transaction[],
  void,
  { rejectValue: string }
>('transactions/fetchAllTransactions', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<Transaction[]>('/api/transactions');
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Failed to fetch all transactions');
  }
});



// Slice
 const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTransactionsBySeller.pending, (state) => {
           
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchTransactionsBySeller.fulfilled, (state, action) => {
            console.log("API Response in Redux:", action.payload);
          state.loading = false;
          state.transactions = action.payload;
        })
        .addCase(fetchTransactionsBySeller.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
        .addCase(fetchAllTransactions.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAllTransactions.fulfilled, (state, action) => {
            state.loading = false;
            state.transactions = action.payload;
          })
          .addCase(fetchAllTransactions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
    },
  });

  export default transactionSlice.reducer;
  


  