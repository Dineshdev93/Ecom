import {configureStore} from '@reduxjs/toolkit'
// import  Admin_Slice  from '../slice/adminAuthSlice/AdminSlics'
import Admin_Slice from '../slice/adminAuthSlice/AdminSlics'
export const store = configureStore({
    reducer : {
        admin : Admin_Slice,
    }
})