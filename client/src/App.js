import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Productpage from "./pages/Productpage/Productpage";
import { Routes, Route } from "react-router-dom";
import Productdetailspage from "./pages/ProductDetailpage/Productdetailspage";
import Carts from "./pages/Carts/Carts";
import Userprofile from "./pages/Userprofile/Userprofile";
import Login from "./pages/Userauth/Login";
import Signup from "./pages/Userauth/Signup";
import Forgotpassword from "./pages/Userauth/Forgotpassword";
import Shipping from "./pages/Shipping/Shipping";
import Checkout from "./pages/Checkout/Checkout";
import Userorders from "./pages/Userorders/Userorders";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminCommonlayout from "./pages/Admin/AdminCommonlayout";
import Admindashboard from "./pages/Admin/Admindashboard";
import Adminproducts from "./pages/Admin/Adminproducts";
import Adminaddproduct from "./pages/Admin/Adminaddproduct";
import ProductCategory from "./pages/Admin/ProductCategory";
import Orders from "./pages/Admin/Orders";
import { Slide, ToastContainer} from 'react-toastify';
import Protectroute from "./components/Protectedroute/Protectroute";
function App() {
  return (
    <div className="App ">
      
        <Routes>
            {/* Admin Routes */}
            {/* use of protected routes */}
            
          <Route path="/admin/*" element={<Protectroute />}>  
            <Route path="dashboard" element={<AdminCommonlayout><Admindashboard /></AdminCommonlayout>} />
            <Route path="products" element={<AdminCommonlayout><Adminproducts /></AdminCommonlayout>} />
            <Route path="addproducts" element={<AdminCommonlayout><Adminaddproduct /></AdminCommonlayout>} />
            <Route path="category" element={<AdminCommonlayout><ProductCategory /></AdminCommonlayout>} />
            <Route path="orders" element={<AdminCommonlayout><Orders /></AdminCommonlayout>} />
          </Route>
          <Route path="/admin/admin-login" element={<Layout><AdminLogin /></Layout>} />

           {/* USer routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/products" element={<Layout><Productpage /></Layout>} />
          <Route path="/productsdetail/:id" element={<Layout><Productdetailspage /></Layout>} />
          <Route path="/cart" element={<Layout><Carts /></Layout>} />
          <Route path="/userprofile" element={<Layout><Userprofile /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Layout><Signup /></Layout>} />
          <Route path="/forgot-password" element={<Layout><Forgotpassword /></Layout>} />
          <Route path="/shipping" element={<Layout><Shipping/></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout/></Layout>} />
          <Route path="/user-orders" element={<Layout><Userorders/></Layout>} /> 
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
        <ToastContainer
           position="top-center"
           autoClose={2000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick={false}
           rtl={false} 
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
           transition={Slide}
           />
    </div>
  );
}
export default App;
