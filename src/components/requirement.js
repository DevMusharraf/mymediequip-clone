import React from "react";
import "./requirement.css";
import { Link } from "react-router-dom";

function requirement({ closeModal }) {
  return (
    <div>
      <div className=" modal-bg">
        <div className=" main-box ">
          <div className="sub-contain">
            <div className="cross-sign text-right">
          <Link to="/"><i class="bi bi-x"></i></Link>
            </div>
            <h2>REQUIRMENT FORM</h2>
            <form className="form-contact">
              <h3>Personal Information</h3>
              <div className="row contact-info-row">
                <div className="col">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Enter your  full name"
                  ></input>
                </div>
                <div className="col">
                  <span>Email Id</span>
                  <input type="text" placeholder="Enter your emal id"></input>
                </div>
              </div>
              <div className="row contact-info-row">
                <div className="col">
                  <span>Contact No.</span>
                  <input
                    type="text"
                    placeholder="Enter your contact number"
                  ></input>
                </div>
                <div className="col">
                  <span>Location</span>
                  <input type="text" placeholder="Enter your Location"></input>
                </div>
              </div>
              <h3>Equipment Information</h3>
              <div className="row contact-info-row">
                <div className="col">
                  <span>Equipment Category</span>
                  <input
                    type="text"
                    placeholder="Select the equipment Categories"
                  ></input>
                </div>
                <div className="col">
                  <span>Condition of Equipment</span>
                  <div className="radio-btn">
                    <div>
                      <input type="radio" name="prodtype" />
                      <span>Pre Owned</span>
                    </div>
                    <div>
                      <input type="radio" name="prodtype" />
                      <span>Pre Owned</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row contact-info-row">
                <div className="col">
                  <span>Price Range</span>
                  <input
                    type="text"
                    placeholder="Enter price range of equipment"
                  ></input>
                </div>
                <div className="col">
                  <span>Equipment Year Range</span>
                  <input
                    type="text"
                    placeholder="Enter required year range for the equipment"
                  ></input>
                </div>
              </div>
              <p className="note">
                Note : Rechack all the details before final submission of the
                form.
              </p>
              <input
                className="submit-button"
                type="submit"
                value="SUBMIT"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default requirement;
