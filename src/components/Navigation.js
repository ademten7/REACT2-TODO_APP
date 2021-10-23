import React, { Component } from "react";
import logo from "../image/logo.png";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="left">
          <img
            src={logo}
            alt="logo"
            onClick={() => this.props.switchPageToHome()}
          />
        </div>
        <div className="right">
          <a onClick={() => this.props.switchPageToAbout()}>About</a>
        </div>
      </nav>
    );
  }
}
