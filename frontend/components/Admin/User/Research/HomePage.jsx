import React from "react";
import HomePageNav from '../Navigation';
import img1 from "url:./Images/img1.jpg";
//import img2 from "url:./Images/img2";
import img3 from "url:./Images/img3.png";


function HomePage() {
  return (
    <div>
    <HomePageNav/>
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
   </div>
   <div className="container" style={{ marginTop: '5%' }}>
                <div className="text-center container">
                    <div className="row ps-5">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-10 ">                          
                            <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>How to write research paper for conference ?</span>
                            <h5 className="fw-normal " style={{ paddingTop: '10%' }}>
                            Writing a research paper is a difficult task. Most of the scholars and researchers do great works during their research but when the question comes to write a paper on their own research, then they fail to do so. This because of lack of information, understanding the procedure, process, lack of knowledge and proper guidance.
                            If you planning to write a paper then you must prepare your self before writing the paper. <b>Let us discuss in details.</b><br />
                            </h5><br/><br/>
                            <h6>
                        1.You can read as many as papers based on your research topic which are previously published. You will have a clear idea of how the facts and findings get presented.<br/><br/>
                        2.Download as many as papers you can base on your topic and collect the citations for the reference of your paper.<br/>
                        3.Collect all the figures, pictures of results of the experiment done by you or required for the publication, Collect the tables and facts with reference.<br/><br/>
                        4.Check the sample paper/paper format from the conference’s website or brochure. Most of the conference organizers have a predefined sample formatted paper. So according to that, you need to prepare conference paper. It will be rejected if you don’t do so. The sample paper format may change from conference to conference.<br/><br/>
                        5.Check the rules and regulation of the conference for publication and selection criteria.<br/><br/></h6>
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
                                <a href='/addResearch'><button type="button" class="btn btn-dark btn-lg"><h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Add Research Paper</h5></button></a>
                                    
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


