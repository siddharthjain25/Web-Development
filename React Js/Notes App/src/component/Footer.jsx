import React from "react";

const d = new Date();
let year = d.getFullYear();

function Footer(){
    return (
        <footer>
            <p>copyright {year}</p>
        </footer>
    )
}

export default Footer;