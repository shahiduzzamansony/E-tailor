import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../images/favicon.jpg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <img className="h-16 rounded" src={logo} alt="logo"></img>
        <p>
          E-Tailor
          <br />
          Providing reliable service since 2010
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/">
            <FaFacebook className="text-3xl"></FaFacebook>
          </a>
          <a href="https://twitter.com/home?lang=en">
            <FaTwitter className="text-3xl"></FaTwitter>
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="text-3xl"></FaYoutube>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
