import React, { useState, useEffect } from "react";
import HomePageNav from '../navbars/homePageNav';
import Footer from '../footer/footer';
import '../assert/style.css';
import ContactUs from '../LandingPage/ContactUs/ContactBody';
import AboutUs from './AboutUs/AboutUsBody';
import PastProceeding from "./PastProceeding/PastProceedingImages";

function Index() {
    return (
        <div>
            <HomePageNav />
            <img src="https://i.imgur.com/wwjSkZY.jpeg" class="img-fluid" width="100%" alt="..."></img>
            <div className="bg-black border-top border-dark pt-3 pb-3 ps-5 pe-5">
                <div className="row ps-5">
                    <div className="col-sm-4 ">
                        <i className="bi bi-geo-alt-fill h2 text-white"></i>
                        <span className="text-muted h5 fw-normal text-uppercase">SLIIT Main Auditorium</span>
                    </div>
                    <div className="col-sm-4 ">
                        <i className="bi bi-calendar-week-fill h2 text-white"></i>
                        <span className="text-muted h5 fw-normal text-uppercase">&nbsp;July 1-2, 2021</span>
                    </div>
                    <div className="col-sm-4">
                        <i className="bi bi-bookmark-star-fill h2 text-white"></i>
                        <span className="text-muted h5 fw-normal text-uppercase fst-italic">&nbsp;" AF For Future "</span>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '5%' }}>
                <div className="text-center container">
                    <div className="row ps-5">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-10 ">
                            <h5 className="text-uppercase fw-normal text-gold text-decoration-underline" style={{ paddingTop: '10%' }}>
                                About Us<br />
                            </h5>
                            <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>3RD INTERNATIONAL CONFERENCE ON Application Framework 2021</span>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                    <AboutUs/>
                    <a href='/about'><button type="button" className="btn btn-orange  btn-sm" style={{ letterSpacing: '2px' }}>More Details <i className="bi bi-arrow-right-circle-fill"></i></button></a>
                </div>
            </div>
            <center className="pt-5">
                <hr className="w-75 " />
            </center>
            <div className="text-center" style={{ marginTop: '7%' }}>
                <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>... YOU CAN DO ...</span>
            </div>
            <div className="card-group container">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="bg-orange pb-1" style={{ marginTop: '13%', marginBottom: '7%' }}>
                <div className="text-center container pt-5 pb-4">
                    <span className=" h2 text-white text-uppercase text-decoration-underline " style={{ textDecoration: 'none' }}><br />Keynote Speakers</span>
                </div>
                <center>
                    <table width="80%" className="text-center ">
                        <tr>
                            <td>
                                <img src="https://i.imgur.com/j3uLOBU.jpeg" alt="..." className="rounded mx-auto d-block"></img>
                                <div className="pt-3 text-white">
                                    <h4 className="text-capitalize">PROFESSOR LALITH GAMAGE<br />
                                        <span style={{ fontSize: '16px' }} className="fw-light text-capitalize">President/CEO Of SLIIT</span></h4>
                                </div>

                            </td>
                            <td>
                                <img src="https://i.imgur.com/jDnUn2Z.jpeg" alt="..." className="rounded mx-auto d-block"></img>
                                <div className="pt-3 text-white">
                                    <h4 className="text-capitalize">Prof. Koliya Pulasinghe <br />
                                        <span style={{ fontSize: '16px' }} className="fw-light text-capitalize">Professor - Faculty Of Computing </span></h4>
                                </div>
                            </td>
                        </tr>
                    </table>
                </center>
                <div className="bg-orange pb-5">
                    <div className="text-center container pt-5 pb-4">
                        <span className=" h2 text-dark text-uppercase text-decoration-underline" style={{ textDecoration: 'none' }}>GUESt Speakers</span>
                    </div>
                    <center>
                        <div>
                            <img src="https://i.imgur.com/p5wl2Jz.jpg" alt="..." className="rounded mx-auto d-block"></img>
                            <div className="pt-3 text-light">
                                <h4 className="text-capitalize">Mr. Reshan Dewapura<br />
                                    <span style={{ fontSize: '16px' }} className="fw-light text-capitalize"> Professional Speaker</span></h4>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
            <div className="container" style={{ marginTop: '5%', marginBottom: '0%' }}>
                <div className="text-center container">
                    <div className="row ps-5">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-10 ">
                            <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' ,marginTop:'0%',marginBottom:"2%"}}>Past AFGlobal Conferences</span>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                    <br />
                    <PastProceeding/>
                </div>
            </div>
            <center>
                <hr className="w-75" />
            </center>
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Index;
