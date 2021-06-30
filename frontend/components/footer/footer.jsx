import React from "react";

function HomeNavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                <div className="container-fluid" >
                    <a className="navbar-brand text-muted" href="#">AFGlobal-2021</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/Admin_side_login">Admin Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Admin_side_registration">Admin Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HomeNavBar;
