import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import working from "./image/how_we_works.1443502f8ca72f97d116.png";
import "./login.css";

function Login() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  return (
    <div className="container-fluid bg-image d-flex justify-content-center">
      <div className="row ">
        <div className="col text-center mb-4 pb-3">
          <h3 className="heading-work">How MedieQuip Works</h3>
          <img className="working-img" src={working} alt=""></img>
          <p className="note-work">
            If Inspection Engineer Does Not Find Equipment in Acceptable
            Condition. Amount paid for blocking will be refunded
          </p>
        </div>
        <div className="col">
          <div className="box-login">
            <div className="container-fluid">
              <div className="row d-flex sign-row mt-3 ">
                <div className="col-6 d-flex justify-content-center ">
                  <button className="sign-in" href="">
                    SIGN IN
                  </button>
                </div>
                
              </div>
              <form className="sign-in__form">
                <div className="login-options">
                  <label>Mobile Number</label>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
