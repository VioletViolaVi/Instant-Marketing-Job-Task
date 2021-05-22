import React from "react";

const divider = " | ";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#home">Home</a>{divider}</li>
                <li><a href="#about">About</a>{divider}</li>
                <li><a href="#contactUs">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;