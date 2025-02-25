import { commonrequest } from "../Commonrequest";
import { BASE_URL } from "../helper";

export const userRegister = async(data , header)=>{
     return await commonrequest('POST',`${BASE_URL}/userauth/api/register`,data,header , "");
}