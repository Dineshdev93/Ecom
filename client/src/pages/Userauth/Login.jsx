import React from 'react'
import { useState } from 'react';
import "./loginSignup.css";
import { NavLink , useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpass, setConpass] = useState("");
    const [showpass, setShowpass] = useState(false);
    const [conshowpass, setShowconpass] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState("");
  return (
   <>
   <section className="container signup_login_form_caontainer mb-5">
      <div className="row justify-content-center">
        <div className="col-md-7  register_user">
          <h2 className="text-center">Welcome back & Sign in!</h2>
          {/* <div class="divider">
            <span style={{ fontSize: "20px" }}>or</span>
          </div> */}
          {/* <div className="logingoogle ">
            <div>
              <img src="./google.png" width={30} alt="" />
            </div>
            <div>
              <span>Log in with Google </span>
            </div>
          </div> */}
          <form>
            <div className="mt-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <br />
              <span style={{ color: "red" }}>
                {email.length === 0 && error ? error : ""}
              </span>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 password_container">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <br />
              <span style={{ color: "red" }}>
                {password.length === 0 && error ? error : ""}
              </span>
              <input
                type={showpass ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="eye_icon">
                <span
                  onClick={() => setShowpass(!showpass)}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={
                      showpass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
           
            <div className="mb-3 forgotpasslink">
              <NavLink to={"/forgot-password"}>Forfgot password</NavLink>
            </div>
            <div className="btn_register">
              <button >Log in</button>
            </div>

            <span className="subhedaing">
              If you have not an account , Plz &nbsp;{" "}
              <NavLink to={"/signup"}>Signup Now</NavLink>
            </span>
          </form>
        </div>
      </div>
    </section>
   </>
  )
}
