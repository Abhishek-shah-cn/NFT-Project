import React from "react";
import footer from "./assets/footer.png";
import ilus from "./assets/ilus.svg";
import black from "./assets/black.png";
import logo from "./assets/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="main">
      <div className="footer">
        <img src={footer} className="foo" alt="" />
        <img src={ilus} className="foo-img" alt="" />
        <div className="head">
          <h2>Subscribe to our Daily Newsletter</h2>
          <input
            type="text"
            className="search rounded light"
            placeholder="Enter Your Email"
          />
        </div>
      </div>

      <div className="contact">
        <img src={black} className="back" alt="" />

        <div className="display">
          <div className="logo">
            <img src={logo} alt="" />
            <h3>NFT Gate</h3>
          </div>

          <div className="links">
            <h2>Quick Links</h2>
            <a href="">Overview</a>
            <a href="">Features</a>
            <a href="">Ecosystem</a>
            <a href="">Contact</a>
            <p>Copyright &copy; 2021 NFT Gate</p>
          </div>

          <div className="connect">
            <h2>Connect With Us</h2>
            <a href="https://twitter.com/nftgate">
              <FaTwitter />
            </a>
            <a href="https://t.me/nftgateofficial">
              <FaTelegram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="https://medium.com/@nftgate">
              <FaMedium />
            </a>
            <a href="https://www.facebook.com/nftgateofficial/">
              <FaFacebook />
            </a>

            <div className="support">
              <h2>Support & Media Inquiries</h2>

              <h3>contact@nftgate.io</h3>

              
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
