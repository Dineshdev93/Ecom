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
function App() {
  return (
    <div className="App ">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/productsdetail/:id" element={<Productdetailspage />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/shipping" element={<Shipping />} />
           
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
