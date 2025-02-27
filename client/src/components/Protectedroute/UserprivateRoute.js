import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const UserPrivateroute = ()=>{
    const isauthenticated = localStorage.getItem('user-token');
    return isauthenticated ? <Outlet/> : <Navigate to={'/login'} />
}