import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Productpage from "./pages/Productpage/Productpage";
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App ">
      <Layout>
        
        <Routes>
        <Route path="/" element={<Home/>} />  
            <Route path="/products" element={<Productpage/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
