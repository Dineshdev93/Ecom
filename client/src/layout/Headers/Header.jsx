import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <nav className="container mt-3">
        <div className="left">
          <NavLink to={"#"}>
            <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="logo" />
          </NavLink>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleShow}>
          <i class="fa-solid fa-bars"></i>
          </div>
          <div className="p1">
            <NavLink to={"#"}>Products</NavLink>
          </div>
          <div className="badge-icon">
            <span>
              <i class="fa-solid fa-cart-shopping counts" data-count={0}></i>
              <span className="badge">0</span>
            </span>
          </div>
          <div className="dropdown-basic">
            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                    <i class="fa-regular fa-user"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
      

      <Offcanvas show={show} onHide={handleClose} className="sidebar" style={{width:"50%",height:"80%",backgroundColor:"#bad9ff"}} >
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="p2">
            <NavLink to={"#"}>Products</NavLink>
          </div>
          <div className="badge-icon2 mt-3">
            <span>
              <i class="fa-solid fa-cart-shopping counts" data-count={0}></i>
              <span className="badge">0</span>
            </span>
          </div>
          <div className="dropdown2 mt-3">
            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                    <i class="fa-regular fa-user"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
