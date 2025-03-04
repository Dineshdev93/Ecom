import React, { useState } from 'react'

export default function Resetpassword() {
    const [pass,setShowpass] = useState(false) 
      const [conpass, setConpass] = useState(false)
  return (
    <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6  register_user">
              <h1 className="text-center mt-3">Reset Password</h1>
              <form>
                <div className="mb-3 password_container">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>{" "}
                  <br />
                  
                  <input
                    type={pass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                    name="password"
                //    onChange = {handlechange}
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
                 
                  <input
                    type={conpass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Enter confirm password"
                    name="confirmpassword"
                    //  onChange={handlechange}
                  />
                  <div className="eye_icon">
                    <span onClick={()=>setConpass(!conpass)} style={{cursor:"pointer"}}>
                      <i class={conpass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}>
                      </i>
                    </span>
                  </div>
                </div>
                <div className="btn_register">
                  <button >Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </section>
  )
}
