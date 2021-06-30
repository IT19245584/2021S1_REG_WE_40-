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
                          <a className="text-decoration-none" href="Admin_dashboard_user">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i className="bi bi-person-circle"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">User Management</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                           <div className="col-sm-4">
                          <a className="text-decoration-none" href="Admin_Supplier">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i class="bi bi-people-fill"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">Suppliers</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                      <div className="row"style={{marginTop:'4%'}}>
                        <div className="col-sm-4">
                          <a className="text-decoration-none" href="Admin_keynote">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i class="bi bi-person-bounding-box"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">Keynote Speaker</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                        <div className="col-sm-4">
                          <a className="text-decoration-none" href="Admin_dashboard_user">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i class="bi bi-clipboard-data"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">Past Events</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                           <div className="col-sm-4">
                          <a className="text-decoration-none" href="Admin_dashboard_user">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i class="bi bi-gear-fill"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">Technical Commitee</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                      <div className="row"style={{marginTop:'4%'}}>
                        <div className="col-sm-4">
                          <a className="text-decoration-none" href="Admin_BudjectView">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i class="bi bi-basket2-fill"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">Workshop</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                        <div className="col-sm-4">
                          <a className="text-decoration-none" href="Admin_dashboard_user">
                          <div className="card bg-main-card">
                            <div className="card-body text-center">
                              <h1><i class="bi bi-file-earmark-break-fill"></i></h1>
                              <h4 className="card-title text-capitalize fw-bold">Documents</h4>
                            </div>
                          </div>
                          </a>
                        </div>
                           
                      </div>
                    </div>
                </main>
            
            </div>
        </div>
        </div>
   )
}