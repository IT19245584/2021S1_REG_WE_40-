import React from "react";

function HomeNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand h1 fw-bold" style={{fontSize:'30px'}} href="#"><span className="text-warning text-uppercase">AF</span>Global-2021</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex">
                <button className="btn btn-warning " type="submit">Login <i className="bi bi-box-arrow-in-right"></i></button>&nbsp;&nbsp;
                <button className="btn btn-outline-warning " type="submit">Registration <i className="bi bi-save2"></i></button>&nbsp;&nbsp;
            </form>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default HomeNavBar;
