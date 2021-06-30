import React from "react";

function HomeNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand h1 fw-bold" style={{ fontSize: '30px' }} href="/"><span className="text-warning text-uppercase">AF</span>Global-2021</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/keynote">KeyNotes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Authors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/research">Research</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/workshop">Workshops</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/date">Important Dates</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Committee
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/org">Organizing Committee</a></li>
                  <li><a class="dropdown-item" href="/tec">Technical Committee</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/about">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contact">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex">
                <button className="btn btn-warning " type="submit"><a className="text-decoration-none text-dark" href="/Login">Login</a> <i className="bi bi-box-arrow-in-right"></i></button>&nbsp;&nbsp;
                <button className="btn btn-outline-warning " type="submit"><a className="text-decoration-none text-white" href="/registration">Registration </a><i className="bi bi-save2"></i></button>&nbsp;&nbsp;

             

            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavBar;
