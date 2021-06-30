import React from "react";
import HomePageNav from '../Navigation';
import img1 from "url:./Images/img1.jpg";
//import img2 from "url:./Images/img2";
import img3 from "url:./Images/img3.png";

function HomePage() {
  return (
    <div>
    <HomePageNav/>
   
   <div className="container" style={{ marginTop: '5%' }}>
                <div className="text-center container">
                    <div className="row ps-5">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-10 ">                          
                            <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>Got ideas for a cool new workshop you plan on spearheading?</span>
                            <h5 className="fw-normal " style={{ paddingTop: '10%' }}>Well that’s great news. However, there’s going to be a lot of work needed to turn your plans into an effective reality, starting with workshop agendas. If that term is unfamiliar to you, then you’ve come to the right place. Besides providing you with tips and trivia, this article also comes with its own list of workshop agenda templates that you can easily download for your own needs! Don’t just sit there staring at your screen; start scrolling now!
                            <br />
                            </h5><br/><br/>
                            <div id="carouselExampleIndicators" class="carousel slide sld1 " data-ride="carousel">
                                <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                </ol>
                                <div class="carousel-inner ">
                                <div class="carousel-item active">
                                <img class="d-block w-100" style={{height:'50%'}} src={img3} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src="https://i.imgur.com/wwjSkZY.jpeg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src={img1} alt="Third slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src={img1} alt="fourth slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src={img1}alt="fourth slide" />
                            </div>
                </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div><br/>
                <h6>
                The workshop header displays key information about the workshop record that is currently open, and shows at the top of each workshop detail tab. The header itself cannot be edited, but the fields that display in the header may be edited elsewhere in the workshop detail record, or populate automatically.  The workshop header will update to display any changes.<br/><br/></h6>
                </div>
                <div className="col-sm-1 "></div>
            </div>                 
            </div>
            </div>  
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4" className="text-center container">
                        <div className="col">
                            <div >
                                <div className="card-body">
                                <a href='/addWorkshop'><button type="button" class="btn btn-dark btn-lg"><h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Add Workshop Details</h5></button></a>
                                    
                                </div>
                            </div>
                            <div >
                                <div className="card-body">
                                <a href='/viewWorkshop'><button type="button" class="btn btn-dark btn-lg"><h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>View status of Workshop Details</h5></button></a>
                                    
                                </div>
                            </div>
                        </div>                      
                    </div>
                    <br/>
                    <div className="text-center container">
                        <a href='/about'><button type="button" className="btn btn-orange  btn-sm" style={{ letterSpacing: '2px' }}>More Details <i className="bi bi-arrow-right-circle-fill"></i></button></a>
                        </div>
                </div>
            </div>
    
   </div>
 

  );
}

export default HomePage;


