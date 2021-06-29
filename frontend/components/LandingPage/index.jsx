import React, { useState, useEffect } from "react";
import HomePageNav from '../navbars/homePageNav';
import Footer from '../footer/footer';
import '../assert/style.css';
import ContactUs from '../LandingPage/ContactUs/ContactBody';
import AboutUs from './AboutUs/AboutUsBody';
import PastProceeding from "./PastProceeding/PastProceedingImages";
import ImportantDate from "./ImportantDates/ImportantDatesBody";
import KeynoteSpeaker from "./KeyNotes/KeynoteSpeaker";
import GuestSpeaker from "./KeyNotes/GuestSpeaker";

function Index() {
    return (
        <div>
            <HomePageNav />
            <img src="https://i.imgur.com/wwjSkZY.jpeg" class="img-fluid" width="100%" alt="..."></img>
            <div className="bg-black border-top border-dark pt-3 pb-3 ps-5 pe-5">
                <div className="row ps-5">
                    <div className="col-sm-4 ">
                        <i className="bi bi-geo-alt-fill h2 text-white"></i>
                        <span className="text-muted h5 fw-normal text-uppercase">&nbsp;SLIIT Main Auditorium</span>
                    </div>
                    <div className="col-sm-4 ">
                        <i className="bi bi-calendar-week-fill h2 text-white"></i>
                        <span className="text-muted h5 fw-normal text-uppercase">&nbsp;&nbsp;July 24-25, 2021</span>
                    </div>
                    <div className="col-sm-4">
                        <i className="bi bi-bookmark-star-fill h2 text-white"></i>
                        <span className="text-muted h5 fw-normal text-uppercase fst-italic">&nbsp;&nbsp;" AF For Future "</span>
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
                            <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>4TH INTERNATIONAL CONFERENCE ON Application Framework 2021</span>
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
            <div className="text-center" style={{ marginTop: '5%',marginBottom:'5%' }}>
                <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>Important Dates to Remember</span>
            </div>
            <ImportantDate/>
            <div className="bg-orange pb-1" style={{ marginTop: '7%', marginBottom: '7%' }}>
                <div className="text-center container pt-5 pb-4">
                    <span className=" h2 text-white text-uppercase text-decoration-underline " style={{ textDecoration: 'none' }}><br />Keynote Speakers</span>
                </div>
                <center>
                    <KeynoteSpeaker/>
                </center>
                <div className="bg-orange pb-5">
                    <div className="text-center container pt-5 pb-4">
                        <span className=" h2 text-dark text-uppercase text-decoration-underline" style={{ textDecoration: 'none' }}>Guest Speakers</span>
                    </div>
                    <center>
                        <div>
                            <GuestSpeaker/>
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
