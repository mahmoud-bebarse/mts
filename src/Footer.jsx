import React from "react";
export default function Footer() {
    return (
      <footer className="footer-container">
        <div className="footer-links-container">
          <p>YTS © 2011 - 2023 -</p>
          <a className="footer-links" href="#">
            Blog
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            DMCA
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            API
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            RSS
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            Contact
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            Browse Movies
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            Requests
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            Login
          </a>
          <p>-</p>
          <a className="footer-links" href="#">
            Language
          </a>
        </div>
        <p className="terms">
          By using this site you agree to and accept our
          <a className="footer-links terms" href="#">
            User Agreement
          </a>
          , which can be read
          <a className="footer-links terms" href="#">
            here
          </a>
          .
        </p>
      </footer>
    );
}