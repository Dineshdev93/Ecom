import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

// for add category by admin
export const addcategory = async(data , header)=>{
    return await commonrequest('POST' , `${BASE_URL}/product/api/addcategory`,data , header , 'admin')
}

export const getcategorydata = async (header) => {
    return await commonrequest('GET' ,`${BASE_URL}/product/api/getcategory`, "" , header , 'admin')
}

export const addProduct = async (data ,categoryid , header) => {
    return await commonrequest('POST' ,`${BASE_URL}/product/api/addProducts?categoryid=${categoryid}`, data , header , 'admin')
}