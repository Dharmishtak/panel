import React from "react";
import '../../src/App.css'



const Nav = function Nav() {
    return (
            <nav className="nav">
                <div class="navbar">
                    <div class="logo">
                        Lets<span>Blog</span>
                    </div>
                    <div class="menu">
                        <a href="#home">Home</a>
                        <a href="#ser">Blog</a>
                        <a href="#abo">About</a>
                        <a href="#cont">Contact</a>
                        <a href="#qua">Quary</a>
                    </div>
                    <div class="login">
                        <a href="./login.html">Login</a>
                    </div>
                </div>
            </nav>
      
    );
}


export default Nav;