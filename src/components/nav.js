import React from "react";
import "../../src/App.css";

const Nav = function Nav() {
  return (<header>
    <nav className="nav">
      <div class="nav_logo">
        Support<span> Panel</span>
      </div>
      <div class="nav_button">
        <a href="#">Login</a>
        <a href="#">SignUp</a>
      </div>

      <div></div>
    </nav>
    </header>
  );
};

export default Nav;
