import {createAsyncThunk , createSlice} from '@reduxjs/toolkit'
import { userRegister } from '../../../api/Userauthapi/userauthapi'
import { toast } from 'react-toastify'


export const Registeruser = createAsyncThunk('register-user',
    async(data  , thunkApi)=>{
          try {
            const response = await userRegister(data.formdata , data.headers)
            if(response.status === 200){
                toast.success("User Register Successfully")
                return response.data ; 
            }else {
                toast.error("User Register alreday")
            }
          } catch (error) {
              return thunkApi.rejectWithValue(error)
          }
    }
)


 const UserAuthSlice = createSlice({
    name : "userSlice" ,
    initialState : {
       userRegister : [],
       loading : false
    },
    extraReducers : ((builder)=>{
        builder
        .addCase(Registeruser.pending, (state)=>{
             state.loading = true;
        })
        .addCase(Registeruser.fulfilled, (state, action) => {
                state.loading = false;
                state.userRegister = [action.payload];
      })
      .addCase(Registeruser.rejected, (state)=>{
        state.loading = false
      })
    })
})

export default UserAuthSlice.reducer;
