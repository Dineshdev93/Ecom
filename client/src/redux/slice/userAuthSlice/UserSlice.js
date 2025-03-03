import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout, userRegister, userVerify } from "../../../api/Userauthapi/userauthapi";
import { toast } from "react-toastify";

export const Registeruser = createAsyncThunk(
  "register-user",
  async (data, thunkApi) => {
    try {
      const response = await userRegister(data.formdata, data.headers);
      if (response.status === 200) {
        toast.success("User Register Successfully");
        return response.data;
      } else {
        toast.error("User Register alreday");
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const Loginuser = createAsyncThunk(
  "login_user",
  async (data, thunkApi) => {
    try {
      const response = await userLogin(data);
      if (response.status === 200) {
        localStorage.setItem("user-token",response.data.token)
        toast.success("User Login Successfully");
        // console.log("data" , response.data);
        return response.data;
      } else{
         return thunkApi.rejectWithValue();
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// user verify Slice
export const Userverifyed = createAsyncThunk(
  "verify_user",
  async (thunkApi) => {
    try {
      const response = await userVerify();
      if (response.status === 200) {
        // console.log("user-verified" ,response.data);
        return response.data;
      } else{
         return thunkApi.rejectWithValue();
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

  export const Userlogout =  createAsyncThunk(
    'user-logout',
    async()=>{
        try {
           const response = await userLogout();
           if(response.status === 200){
              toast.success("User Logout Successfully");
              localStorage.removeItem("user-token");
           }
        } catch (error) {
             toast.error("Failed")
        }
    }
  )

const UserAuthSlice = createSlice({
  name: "userSlice",
  initialState: {
    userRegister: [],
    Loginuserdata : [],
    LoggeduserData : [],
    LogOutUser : [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Registeruser.pending, (state) => {
        state.loading = true;
      })
      .addCase(Registeruser.fulfilled, (state, action) => {
        state.loading = false;
        state.userRegister = [action.payload];
      })
      .addCase(Registeruser.rejected, (state) => {
        state.loading = false;
      })

      // user login cases
      .addCase(Loginuser.pending, (state)=>{
           state.loading = true;
      })
      .addCase(Loginuser.fulfilled,(state,action)=>{
          state.loading = false;
          state.Loginuserdata = [action.payload]
      })
      .addCase(Loginuser.rejected,(state)=>{
          state.loading = false ; 
      })

      // user verify cases
      .addCase(Userverifyed.pending,(state)=>{
          state.loading = false;
      })
      .addCase(Userverifyed.fulfilled,(state,action)=>{
          state.loading = true;
          state.LoggeduserData = [action.payload]
      })
      .addCase(Userverifyed.rejected,(state)=>{
          state.loading = false;
      })

      // user logout cases
      .addCase(Userlogout.pending,(state)=>{
          state.pending = true ; 
      })
      .addCase(Userlogout.fulfilled,(state,action)=>{
           state.pending = false;
           state.LogOutUser = [action.payload];
           state.LoggeduserData = []
      })
      .addCase(Userlogout.rejected,(state)=>{
          state.loading = false; 
      })
    },
});

export default UserAuthSlice.reducer;
