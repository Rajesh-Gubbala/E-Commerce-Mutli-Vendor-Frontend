import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeCategory } from "../../Typess/HomeCategoryType";
import { data } from "react-router-dom";
import { api } from "../../Configg/Api";


const API_URL = "/admin";

export const UpdateHomeCategory = createAsyncThunk<
  HomeCategory,
  { id: number; data: HomeCategory },
  { rejectValue: string }
>(
  "homeCategory/updateHomeCategory",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      console.log("Category updated", response);
      console.log ("...............................",data)
      
      return response.data;
    } catch (error: any) {
      console.log("Error", error);

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Return error response data
      } else {
        return rejectWithValue(
          "An error occurred while updating the category."
        );
      }
    }
  }
);

export const fetchHomeCategories = createAsyncThunk<HomeCategory[]>(
  "homeCategory/fetchHomeCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
     console.log("Categories.........................:", response.data);
      return response.data;
      
    } catch (error: any) {
      console.log("Error:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch categories"
      );
    }
  }
);

interface HomeCategoryState {
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
  categoryUpdated: boolean;
}

const initialState: HomeCategoryState = {
  categories: [],
  loading: false,
  error: null,
  categoryUpdated: false,
};

const homeCategorySlice = createSlice({
  name: "homeCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state for updateHomeCategory
    builder.addCase(UpdateHomeCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.categoryUpdated = false;
    });
    // Handle the fulfilled state for updateHomeCategory
    builder.addCase(UpdateHomeCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryUpdated = true; // Set categoryUpdated flag to true
      // Find the category by ID and update it in the state
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      } else {
        state.categories.push(action.payload); // If the category doesn't exist, add it
      }
    });
    builder.addCase(UpdateHomeCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch home category
    builder
      .addCase(fetchHomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoryUpdated = false; // Reset categoryUpdated flag to false
      })
      builder.addCase(fetchHomeCategories.fulfilled, (state, action) => {
        state.loading = false;
        
        // Remove duplicates based on 'name' or 'categoryId'
        const uniqueCategories = action.payload.filter(
          (category, index, self) =>
            index === self.findIndex((c) => c.name === category.name)
        );
      
        state.categories = uniqueCategories;
      })
      
      .addCase(fetchHomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default homeCategorySlice.reducer;
