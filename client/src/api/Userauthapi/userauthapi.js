import { commonrequest } from "../Commonrequest";
import { BASE_URL } from "../helper";

export const userRegister = async(data , header)=>{
     return await commonrequest('POST',`${BASE_URL}/userauth/api/register`,data,header , "");
}

export const userLogin = async(data , header)=>{
     return await commonrequest('POST',`${BASE_URL}/userauth/api/login`,data , header , "");
}

export const userVerify = async(header)=>{
      return await commonrequest('GET',`${BASE_URL}/userauth/api/userloggedin`,null , header , "") 
}

export const userLogout = async(header)=>{
     return await commonrequest('GET',`${BASE_URL}/userauth/api/logout`,null , header , "") 
}

export const ForgotpasswordResetlink = async(data,header)=>{
     return await commonrequest('POST' , `${BASE_URL}/userauth/api/forgotpassword` , data , header , "")
}