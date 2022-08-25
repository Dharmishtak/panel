import React from "react";
import '../../src/App.css'



const Nav = function Nav() {
    return (
        <nav className="nav">
            <div class="nav_logo">
                Admin<span> Panel</span>
            </div>
            <div className="All_button">
                <div class="nav_button">
                    <a href="#">Login</a>
                    <a href="#">SignUp</a>
                </div>
            </div>
        </nav>

    );
}


export default Nav;