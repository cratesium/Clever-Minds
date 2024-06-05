import React from "react";
//import { ListGroup } from "reactstrap";

import { assets } from "../../assets/assets/assets"
import logo from "../../assets/images/clever_logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
      <div className="footer" id="footer">
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={logo} alt="" />
                  <p>Welcome to CleverMinds - your go-to React-powered food ordering and delivery site. Experience an intuitive interface, diverse cuisines, customizable orders, real-time tracking, and secure payments. Discover, personalize, and track your meals effortlessly on any device. Enjoy deliciousness delivered with CleverMinds!</p>
                  <div className="footer-social-icons">
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>

              <div className="footer-content-right">
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>

              <div className="footer-content-center">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>+1-212-456-7890</li>
                      <li>contact@cleverminds.com</li>
                  </ul>
              </div>
          </div>
          <hr />
          <p className="footer-copyright">
              Copyright 2024 &copy; cleverminds.com - All Right Reserved
          </p>
      </div>
  )
}

export default Footer;
