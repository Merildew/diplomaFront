import React from "react";
import "./styles.css";
import logo from "../../Assets/images/logo.svg";
import logout from "../../Assets/images/logout.svg";
import account from "../../Assets/images/account.svg";
import search from "../../Assets/images/search.svg";

export function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-items">
          <div className="header-logo">
            <a href="/">
              <img className="logo" src={logo} alt="" />
            </a>
          </div>
          <div className="search-box">
            <input type="text" className="search-input"></input>
            <div className="search-button">
              <img className="search-icon" src={search} alt="" />
            </div>
          </div>
          <div className="header-icons">
            <div className="header-icon">
              <a href="/">
                <img className="account" src={account} alt="" />
              </a>
            </div>
            <div className="header-icon">
              <a href="/">
                <img className="logout" src={logout} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
