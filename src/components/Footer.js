import "./style.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">

        <div className="footer-detail">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-logo-section">
            <img className="footer-logo" src="../image/restaurant.png" alt="" />
        </div>

        <div className="copyright-section">
           <p>All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
