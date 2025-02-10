import React from 'react'
import './loginSignup.css'
import { useState } from 'react';
export default function Forgotpassword() {
    const [email, setEmail] = useState("");
  return (
    <div>
       <section className="mt-5 mb-5 forgotpassword">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="card p-5 shadow-sm">
                  <h2 className="text-center mb-3 forgotpassword-heading">
                    Forgot Password
                  </h2>
                  <p className="text-center text-secondary">
                    Enter your registered email address to receive a password
                    reset link.
                  </p>
                  <input
                    type="email"
                    name="forgotpassword"
                    id="forgotpass"
                    placeholder="Enter your email"
                    className="mt-4"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mt-4">
                    <button className="forgotsubmit">
                      Generate Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
