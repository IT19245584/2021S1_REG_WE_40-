import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';

export default function Admin_dashaboard(){
return (
     <div class="sb-nav-fixed">
        <Nav/>
        <div id="layoutSidenav">
            <SlideNav/>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <div className="container-fluid px-4 pt-5 mt-3">
                           <h2 className="text-center text-uppercase text-gold">Budject Dashboard</h2>
                       </div>
                       <div className="row"style={{marginTop:'4%'}}>
                        <div className="col-sm-4">
                          <a className="text-decoration-none" href="Admin_BudjectView">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i className="bi bi-cash-coin"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">Budget report</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                        <div className="col-sm-4">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Special title treatment</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </main>
               <Footer/>
            </div>
        </div>
        </div>
   )
}