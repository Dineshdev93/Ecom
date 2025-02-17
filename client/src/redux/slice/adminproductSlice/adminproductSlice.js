import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addcategory,
  addProduct,
  getcategorydata,
} from "../../../api/Productapi/Productapi";
import { toast } from "react-toastify";

// create category slice
export const addCategorybyadmin = createAsyncThunk(
  "addcategory",
  async (data) => {
    try {
      const response = await addcategory(data);
      if (response.status === 200) {
        toast.success("product added successfully !");
        console.log("response", response);

        return response.data;
      } else {
        toast.error("something wrong !");
      }
    } catch (error) {
      throw error;
    }
  }
);

// slice of add category
export const categorydata = createAsyncThunk("Product-category", async () => {
  try {
    const response = await getcategorydata();
    if (response.status === 200) {
      // console.log('response' , response.data);
      return response.data;
    } else {
      toast.error("something wrong !");
    }
  } catch (error) {
    throw error;
  }
});

// slice of add product
export const addProductbyadmin = createAsyncThunk(
  "add-product",
  async (data) => {
    try {
      const response = await addProduct(data.formdata , data.categoryid ,data.config);
      if(response.status === 200){
        // console.log("helo product" + response.data);
        toast.success("Product has been added !")
        return response.data;
      }
    } catch (error) {
      toast.error("Product not added !")

        throw error;
    }
  }
);

const adminproductsSlice = createSlice({
  name: "amdinproducts",
  initialState: {
    addcategory: [],
    category_data: [],
    addproducts : [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // add cases for add category
    builder
      .addCase(addCategorybyadmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCategorybyadmin.fulfilled, (state, action) => {
        state.loading = false;
        state.addcategory = [action.payload];
      })
      .addCase(addCategorybyadmin.rejected, (state) => {
        state.loading = true;
      })

      // add cases for get category data
      .addCase(categorydata.pending, (state) => {
        state.loading = true;
      })
      .addCase(categorydata.fulfilled, (state, action) => {
        state.category_data = action.payload;
        state.loading = false;
      })
      .addCase(categorydata.rejected, (state) => {
        state.loading = true;
      })
      // add cases for add product by admin 
      .addCase(addProductbyadmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductbyadmin.fulfilled, (state, action) => {
        state.addproducts = action.payload;
        state.loading = false;
      })
      .addCase(addProductbyadmin.rejected, (state) => {
        state.loading = true;
      });
  },
});

export default adminproductsSlice.reducer;
