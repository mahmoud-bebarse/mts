import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="header">
      <span className="logo">
        <Link to="/">
          <img
            className="logo"
            src="https://yts.mx/assets/images/website/logo-YTS.svg"
            alt="YIFY"
          />
        </Link>
        <p className="slogun">HD movies at the smallest file size</p>
      </span>
      <span className="link-holder">
        <input className="search" type="text" placeholder="Quick search" value="Quick search" />
        <Link className="links" to="/">Home</Link>
        <a className="links" id="high-quality-movies" href="#">4k</a>
        <a className="links" href="#">Trending</a>
        <a className="links" href="#">Browse Movies</a>
        <a className="links" id="login" href="#">Login</a>
        <span>|</span>
        <a className="links" id="register" href="#">Register</a>
      </span>
    </nav>
  );
}
