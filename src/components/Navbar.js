import React from "react";
import '../css/style.css';

function Navbar(){
    return (
     
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark" id="nav">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/">portFolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navv" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#section1">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#row2">ABOUT ME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section3">EXPERIENCE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section4">SKILLS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section7">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       
    );
}

export default Navbar;