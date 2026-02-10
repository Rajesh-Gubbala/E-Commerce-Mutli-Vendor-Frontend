import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../Configg/Api";
import { HomeCategory, HomeData } from "../../Typess/HomeCategoryType";
import { data } from "react-router-dom";
import { error } from "console";

// // Async thunk to fetch home page data with try-catch for error handling
// export const fetchHomePageData = createAsyncThunk<HomeData>(
//     'home/fetchHomePageData',
//     async (_, { rejectWithValue }) => {
//       try {
//         const response = await api.get('/home-page');
//         console.log("home page ", response.data);
//         return response.data;
//       } catch (error: any) {
//         // Handle the error and return it to be used in rejected action
//         const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch home page data';
//         console.log("errr ", errorMessage, error);
//         return rejectWithValue(errorMessage);
//       }
//     }
//   );

export const createHomeCategories = createAsyncThunk<HomeData, HomeCategory[]>(
  "home/createHomeCategories",
  async (homeCategories, { rejectWithValue }) => {
    try {
      const response = await api.post("/home/categories", homeCategories);
      console.log("home categories created", response.data);
      console.log("..............................",data)
      return response.data;
    } catch (error: any) {
      // Handle the error and return it to be used in rejected action
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create home categories";
      console.log("errr ", errorMessage, error);
      return rejectWithValue(errorMessage);
    }
  }
);

interface HomeState {
  homePageData: HomeData | null;
  homeCategories: HomeCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  homePageData: null,
  homeCategories: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
      // builder.addCase(fetchHomePageData.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // });

      // builder.addCase(fetchHomePageData.fulfilled, (state, action: PayloadAction<HomeData>) => {
      //   state.loading = false;
      //   state.homePageData = action.payload;
      // });

      // builder.addCase(fetchHomePageData.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || 'Failed to load home page data';
      // })

    builder.addCase(createHomeCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(createHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageData = action.payload;
    });

    builder.addCase(createHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to create home categories";
    });
  },
});

export default homeSlice.reducer;
