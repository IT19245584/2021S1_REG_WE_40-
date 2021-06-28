import React from "react";

function HomeNavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand text-muted" href="#">AFGlobal-2021</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HomeNavBar;
