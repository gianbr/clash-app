import React from "react";
import NavBar from "./Navbar/Navbar";

let Header = ({ menuLinks, submenuLinks }) => {
    return (
        <header>
            <div className="superior container">
            </div>
            <NavBar menuLinks={menuLinks} submenuLinks={submenuLinks} />
        </header>
    );
};

export default Header;