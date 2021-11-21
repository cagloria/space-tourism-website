import React from "react";
import logo from "../assets/logo.svg";

export default function Header() {
    const navIsOpen = false;

    return (
        <header>
            <img src={logo} alt="Space tourism logo" />
            <nav>
                <button
                    className="header__nav-button"
                    aria-haspopup="true"
                    aria-controls="IDREF"
                    aria-expanded={navIsOpen}
                ></button>
                <ol role="menu" aria-labelledby="IDREF">
                    <li role="none">
                        <a href="." role="menuitem">
                            Home
                        </a>
                    </li>
                    <li role="none">
                        <a href="." role="menuitem">
                            Destination
                        </a>
                    </li>
                    <li role="none">
                        <a href="." role="menuitem">
                            Crew
                        </a>
                    </li>
                    <li role="none">
                        <a href="." role="menuitem">
                            Technology
                        </a>
                    </li>
                </ol>
            </nav>
        </header>
    );
}
