import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
export default function Adminaddproduct() {
  const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    
    const [userProfile, setUserprofile] = useState("");
    const [error, setError] = useState("");
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  return (
    <div>
         <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6  register_user">
              <h1 className="text-center mt-3">Add Product</h1>
              
              <form>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    Product
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
                    placeholder="Product name"
                    name="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                    // value={""}
                  />
                </div>
                <div className="mt-3">
                    <label htmlFor="">Product Category</label>
                    <Select options={options} />
                  </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputlast" className="form-label">
                  Discount
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
                    placeholder="Rebate"
                    onChange={(e) => setLastname(e.target.value)}
                    // value={lastname}
                    name="lastname"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    Price
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
                    placeholder="Price"
                    name="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                    // value={""}
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                     Quality
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
                    placeholder="Quality"
                    name="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                    // value={""}
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                     textarea
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {firstname.length === 0 && error ? error : ""}
                  </span>
                  <textarea  style={{width:'100%'}}
                   
                  />
                </div>
                <div className="mt-2 mb-3">  
                  <label for="exampleInputImg" className="form-label">
                    Upload Product
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
                
               
                <div className="btn_register">
                  <button >Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}
