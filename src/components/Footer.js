import React from "react";
import "./Footer.css";
import twitter from "./image/twitter.png";
import linked from "./image/linked-in.png";
import fb from "./image/fb.png";
import insta from "./image/instagram.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-section">
          <div className="footer-links">
            <a className="link-footer" href="/">
              STATISTICS
            </a>
            <a className="link-footer" href="/">
              USER AGREEMENT
            </a>
            <a className="link-footer" href="/">
              FAQ's
            </a>
            <a className="link-footer" href="/">
              SITEMAP
            </a>
            <a className="link-footer" href="/">
              CONTACTS
            </a>
            <a className="link-footer" href="/">
              NEWS
            </a>
            <a className="link-footer" href="/">
              BECOME PARTNER
            </a>
          </div>
          <div className=" row social-links d-flex justify-content-center">
            <img src={twitter} alt="" />
            <img src={linked} alt=""></img>
            <img src={insta} alt=""></img>
            <img src={fb} alt=""></img>
          </div>

          <div className="contact-sect">
            <div className="col ">
              <a className="mail-btn" href="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgB7ZbhUcMwDIWVHANkA9INYAOyAd0gG9AN6AaUCegGZYN2g7BBswHdwLxHZM51k4tD1X/57nQ+y46k5zixRWaMyWKHc64UO05Zlp16R5DoAdY4e46MfaZQVe3V987KxIYC9qLt4k8tEj5rNU9iDGNq7Jr9PKiE7DCwEiMQi+p2oS+P5rSwN0z8uGbz4NkCxle00ZgXE2qVfQ9bBy+7lonoEn6rrVh4uKQXCbVfakJCxUVCokLnksavUFLCwB+qLUdU+QI30VjZt2l6wTZeo6m0y4CvPcno859UhWfGN92QwqjKbahWbe9VDS17rPBOEkDVLRoWdUBLRU0wvMT4pySSywQQeCvdEh9gX7DHKclIksIoaYtmKf9kkkIL5oQ3T7gQe/z3+XsW+gOYzqM6b3EAk0p3eIfrrhj+f2gJf+TnV4wQVTt6OiQyfImaseIH+m3tgbMPE7IAAAAASUVORK5CYII="
                  alt=""
                ></img>
                <span> MedieQuip@gmail.com</span>
              </a>
            </div>
            <div className="col">
              <a className="call-btn" href="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGNSURBVHgBvVUBccMwDHQYmMECIRACoQxmBguDlcHCIGHQMTCEQvCGIBA0+yYvH89ynGu2v9Nda1d6/UtJlXoARHTxYX1MPkxtUuvjjRMxQpFWyBloC+fjdY/EkYzFR1fI733MUMNlm4POrkyKEe/eVZ0rs0gGl71QIChyQuEhLcgNB9yVcGEEIsv3Ojkfwd4JCf3nW3QJEy58OApEsZEho8jkZhOaYieWnwb5MMAKRH3sWgmAZqwqOQVd6UyRl5Ji+J3FWWcbLNjzTCvaHaIBa2Sd8l+6jHQNJEbtgH8/0nYpwgwvqiSdz+7p2cMAT1FVVLrsWXeUzKazAu/daWT0/WwsqQJYFpecB8XhZTzxPNojZKhAC2Qm2UhEmOutipTW18tdIEMYVjaC9XGuXQ2ZFcjwb8WositTDZGmdb0d/X5L60Juy3lW1QJsDFYMlTnHiThxYKKorv8TIkieYdiWF0GfSgRFetpuVyS98l18tuqWoYIwKnSUh4sL1KiTwAU7jicfnz7mpmk+1H/iC6J34WGJJasxAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <span> 265464421132</span>
              </a>
            </div>
          </div>
          <div className="content-bottom text-center">
            <p>@Medie Quip 2023-2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
