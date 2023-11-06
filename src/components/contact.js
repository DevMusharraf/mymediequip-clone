import React from "react";
import "./contact.css";

function contact() {
  return (
    <div>
      <div className="container-fluid background">
        <a href="/" className="back-btn">
          <i class="bi bi-arrow-left-short"></i>
          <span>Back</span>
        </a>
        <div className="container mt-4  d-flex justify-content-space-between">
          <div className="col-8  contact-form">
            <img
              src="http://13.234.30.40:3000/static/media/contactbg.716a99cb753bb80f397c.png"
              alt=""
            />
            <div className="form-section">
              <h1>CONTACT</h1>
              <form>
                <div className="row name-row">
                  <div className="col  name">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Enter your  full name"
                    ></input>
                  </div>
                  <div className="col  name">
                    <span>Email Id</span>
                    <input
                      type="email"
                      placeholder="Enter your  email id"
                    ></input>
                  </div>
                </div>
                <div className="row name-row">
                  <div className="col  name">
                    <span>Contact No</span>
                    <input
                      type="text"
                      placeholder="Enter your  contact number"
                    ></input>
                  </div>
                  <div className="col  name">
                    <span>Location</span>
                    <input
                      type="email"
                      placeholder="Enter your Location"
                    ></input>
                  </div>
                </div>
                <div className="row message-row">
                  <div className="col message">
                    <span>Message</span>
                    <textarea
                      placeholder="Enter your message"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <input
                  className="submit-btn"
                  type="submit"
                  value="SEND"
                ></input>
              </form>
            </div>
          </div>
          <div className="col-4  reach-us">
            <h4>Reach Us</h4>
            <div className="row mt-2 d-flex justify-content-between">
              <div className="col">
                <b>Information</b>
                <p>info@mediequip.com</p>
              </div>
              <div className="col">
                <b>Customer</b>
                <p>support@mediequip.com</p>
              </div>
            </div>
            <div className="row mt-2 d-flex justify-content-between">
              <div className="col">
                <b>Information</b>
                <p>info@mediequip.com</p>
              </div>
            </div>
            <div className="row customer-care mt-2 d-flex justify-content-between">
              <div className="col">
                <b>Information</b>
                <p>info@mediequip.com</p>
              </div>
              <div className="col">
                <b>Information</b>
                <p>info@mediequip.com</p>
              </div>
            </div>
            <div className="row customer-care mt-2 d-flex justify-content-between">
              <div className="col">
                <b>Corporate Office</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis felis risus. In</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
