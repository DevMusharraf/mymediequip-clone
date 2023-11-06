import React, { useState } from "react";
import logo from "./image/logo.png";
import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import RequirementModal from "./requirement";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="navbar container-fluid line">
        <div className="row">
          <div className="col d-flex align-items-center">
            <div className="col">
              <Link to="/">
                <img
                  className="logo d-flex justify-content-start align-items-center"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>

            <div className="col d-flex align-items-center">
              <select className="city-option dropdown-toggle">
                <option value="default-option">India</option>
                <option value="kolkata">Option 2</option>
                <option value="bangalore">Option 3</option>
              </select>
            </div>
            <input
              className="input"
              type="text"
              placeholder="Find medical instrument.."
            />
            <div className="col">
              <button className="search-btn ">Search</button>
            </div>
            <div className="col">
              <Link to="/buy">
                <button className="buy-btn ">Buy</button>
              </Link>
            </div>
            <div className="col">
              <button className="sell-btn ">Sell</button>
            </div>
            <div className="col">
              <button className="explore-btn  dropdown-toggle">Explore</button>
            </div>

            <div className="col">
              <Link to="/special">
                <button className="speciality-btn ">
                  <i className="bi bi-search"></i>Speciality
                </button>
              </Link>
            </div>

            <div className="col">
              <Link to="/user">
                <button className="login-btn ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  Login
                </button>
              </Link>
            </div>
            <div className="col">
              <Link to="/cart">
                {" "}
                <i className="bi bi-cart2 text-primary cart"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>



{/* mobile and tablet view */}

      <div className="navigationblur">
        <header className="navigation__container">
          <Link to="/">
            <img className="navigation__logo" src="http://13.234.30.40:3000/logo.png" alt="myMediequip.in"></img>
          </Link>
          <div>
            <div className="navigation__location">
            <select className="city-option dropdown-toggle">
                <option value="default-option">India</option>
                <option value="kolkata">Option 2</option>
                <option value="bangalore">Option 3</option>
              </select>
            </div>
          </div>
          <div className="cart-hamburg">
            <div className="addtocart">
              <Link to="/cart">
                {" "}
                <i className="bi bi-cart2 text-primary cart"></i>
              </Link>
            </div>
            <div className="navigation__hamburg">
              <span>
                <i className="bi bi-list"></i>
              </span>
            </div>
          </div>
        </header>
      </div>

      <div className="mobileview__search">
        <p>what are you looking for?</p>
        <form>
          <input type="text" placeholder="Find medical instrument..."></input>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG8SURBVHgBtZRBTuswEIb/cV4rsesNXo7wOMELJ4AbNBVQiRV0Aahi0bIhKhtghURBhBMgTkC5QbhBjpAt0HgYO4AgxCGqxL+IR7HzeSb+PcAviGpnr8cd5O0ARB0wZ9Ccon+QYCHoxfE/UjgBOKiYTVnrQ/SHMZpCvctJV4NOBdhh8EzGR1mVQKuOjP/lgzX7IalTvb47+Bl6ebRG8G7ldcY6H1Rmcx751FL3EvkusPq6g3diRtZYcZa3NUzZay/D/AbWO5hGgRt6FYVmdyaO0d+rP4zeIBNgzyZC3sgJJaauDZ75EE20OZzJM7GHaVxSBRWsL4/MlIeGkmwfbfDS8h1QwxXoIiLlylSADL9cSi2L6K8N/jwllVAp5c4G86UQTSTWEmwgUYreOKuEYo642B3bTbJVreLU7e0qz31Exn/gMxhT50v3RSYO4NVkJGtDm2WFn79dUzWdxEww9krlxsQ6f75Drory2giIve7nnsBAiI39m1qo1TQaC3AEh2xPYH54X1MGu1ufKV8yA6tV01xMP0Dhy9mb8aWbRSEpdV0G1/fTJvoAU8Ibe6YnlMy/iOSgWM+XmfMBflOvebWywE9Gl4EAAAAASUVORK5CYII=" alt=""></img>
        </form>
      </div>



      {/* mobile and tablet view */}
      <div className="container-fluid main-navbar  line">
        <div className="row d-flex justify-content-center">
          <nav className="">
            <ul className="d-flex navlinks align-items-center">
              <li className="navpoints">
                <a href="/">Equipment Category</a>
              </li>
              <li className="navpoints margin-nav-btn">
                <Link to="/preown">Pre-owned Equipment</Link>
              </li>
              <li className="navpoints margin-nav-btn">
                <Link to="/new">New Equipment</Link>
              </li>
              <li className="navpoints margin-nav-btn">
                <Link to="/services">Services</Link>
              </li>
              <li className="navpoints margin-nav-btn">
                <Link to="/preown">Spare & Accessories</Link>
              </li>
              <li className="navpoints margin-nav-btn">
                <Link to="/manufacturers">Manufactures & Distribution</Link>
              </li>
              <li className="navpoints margin-nav-btn">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="navpoints ">
                <Link to="/requirement">
                  <button className="create-btn ms-5" onClick={openModal}>
                    Create a Requirement
                  </button>
                  {isModalOpen && <RequirementModal closeModal={closeModal} />}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
