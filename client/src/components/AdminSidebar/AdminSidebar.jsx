import React from "react";
import "../../pages/Admin/admin.scss";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Adminloggedin } from "../../redux/slice/adminAuthSlice/AdminSlics";
import { useSelector } from "react-redux";
export default function AdminSidebar({children}) {
    const dispatch = useDispatch()
   const veryfyAdmin = () =>{
       dispatch(Adminloggedin())
   }
   
   const adminloggeddata  = useSelector((state) => state.admin)
    console.log("admin data" , adminloggeddata);
    
   useEffect(()=>{
      veryfyAdmin();
   },[])

  return (
    <section>
      <Row>
        {/* side bar */}
        <Col md={"2"} className="sidebar">
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
            <div>
              <h3>Ecom</h3>
            </div>
            <div>
              <i className="fa-solid fa-user "></i>
            </div>
          </div>
          <div className="mt-5 sub-sidebar col-md-9">
            <div className="d-flex justify-content-center gap-4">
              <NavLink to={'/admin/dashboard'}
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Dashboard
              </NavLink>
            </div>
            <div className="d-flex  gap-4 mt-4">
              <i class="fas fa-plus-circle"></i>
              <NavLink to={'/admin/addproducts'}>Add Product</NavLink>
            </div>
            <div className="d-flex  gap-4 mt-4">
              <i class="fas fa-folder-plus"></i>
              <NavLink to={'/admin/category'}>Add Category</NavLink>
            </div>
            <div className="d-flex  gap-4 mt-4">
              <i class="fas fa-box"></i>
              <NavLink to={'/admin/products'}>Products</NavLink>
            </div>
            <div className="d-flex  gap-4 mt-4">
              <i class="fas fa-truck"></i>
              <NavLink to={'/admin/orders'}>Orders</NavLink>
            </div>
            <div className="d-flex  gap-4 mt-4">
              <i class="fas fa-tools"></i>
              <NavLink>Settings</NavLink>
            </div>
          </div>
        </Col>
        {/* header */}
        <Col md={10} style={{ padding: "0" }}>
          <nav
            className="admin-header"
            style={{ boxShadow: "0px 0px 5px 0px gray" }}
          >
            <div
              className="d-flex justify-content-start gap-2 align-items-center"
              style={{ fontSize: "22px" }}
            >
              <i
                className="fa-solid fa-bars"
                style={{ fontWeight: "bold" }}
              ></i>
              <span>Dashboard</span>
            </div>
            <div className="dashboard-input" style={{ fontSize: "22px" }}>
              <input type="text" />
              <i className="fa-solid fa-search"></i>
            </div>
            <div className="dropdown-basic">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <i
                    class="fa-regular fa-user"
                    style={{ fontSize: "29px", color: "gray" }}
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/userp">Logout</Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </nav>
         {/* dash board items */}
            <div className="container">
               {children}              
            </div>

        </Col>

      </Row>
    </section>
  );
}
