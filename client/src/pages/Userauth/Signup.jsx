import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./loginSignup.css";
const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [userProfile, setUserprofile] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [pass,setShowpass] = useState(false) 
  const [conpass, setConpass] = useState(false)
  
  return (
    <div>
        <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6  register_user">
              <h1 className="text-center mt-3">Create Your Account</h1>
              <span className="subhedaing">
                If you have alreday registered , Plz &nbsp;{" "}
                <NavLink to={"/login"}>Log In Now</NavLink>
              </span>
              <form>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    First Name
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {firstname.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputname"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    name="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                    // value={""}
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputlast" className="form-label">
                    Last Name
                  </label>{" "}
                  <br/>
                  <span style={{ color: "red" }}>
                    {lastname.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputlast"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    onChange={(e) => setLastname(e.target.value)}
                    // value={lastname}
                    name="lastname"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputImg" className="form-label">
                    Upload Image
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {userProfile.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleInputimg"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    name="userProfile"
                    // onChange={handleFileChange}
                  />
                </div>
                <div className="mt-2 mb-3">
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
                    //  value={email}
                    name="email"
                  />
                </div>
                <div className="mb-3 password_container">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {password.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type={pass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="eye_icon">
                    <span onClick={()=>setShowpass(!pass)} style={{cursor:"pointer"}}>
                      <i class={pass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3 password_container">
                  <label for="exampleInputPassword2" className="form-label">
                    Confirm Password
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {conpassword.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type={conpass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Enter confirm password"
                    name="conPassword"
                    onChange={(e) => setConpassword(e.target.value)}
                  />
                  <div className="eye_icon">
                    <span onClick={()=>setConpass(!conpass)} style={{cursor:"pointer"}}>
                      <i class={conpass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}>
                      </i>
                    </span>
                  </div>
                </div>
                <div className="btn_register">
                  <button >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Signup
