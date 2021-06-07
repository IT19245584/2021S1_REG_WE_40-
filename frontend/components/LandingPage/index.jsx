import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/homePageNav';
import Footer from '../footer/footer';
import '../src/style.css';

function Index() {
  return (
    <div>
       <HomePageNav/>
       <img src="https://i.imgur.com/wwjSkZY.jpeg" class="img-fluid" width="100%" alt="..."></img>
       <div className="bg-black border-top border-dark pt-3 pb-3 ps-5 pe-5">
           <div class="row ps-5">
            <div class="col-sm-4 ">
                <i class="bi bi-geo-alt-fill h2 text-white"></i> 
                <span className="text-muted h5 fw-normal text-uppercase">Isipathana Hall</span>
            </div>
            <div class="col-sm-4 ">
               <i class="bi bi-calendar-week-fill h2 text-white"></i>
               <span className="text-muted h5 fw-normal text-uppercase">&nbsp;Octomber 1-2, 2021</span>
            </div>
             <div class="col-sm-4">
               <i class="bi bi-bookmark-star-fill h2 text-white"></i>
               <span className="text-muted h5 fw-normal text-uppercase fst-italic">&nbsp;" AF For Future "</span>
            </div>
            </div>
       </div>
       <div className="container" style={{marginTop:'5%'}}>
            <div className="text-center container">
             <div class="row ps-5">
                <div class="col-sm-1 "></div>
                <div class="col-sm-10 ">
                   <h5 className="text-uppercase fw-normal text-gold text-decoration-underline" style={{paddingTop:'10%'}}>
                       About Us<br/>
                   </h5>
                <span className=" h2 text-dark text-uppercase"   style={{textDecoration:'none'}}>3RD INTERNATIONAL CONFERENCE ON Application Framework 2021</span>
                </div>
                <div class="col-sm-1 "></div>
             </div>
             <p className="pt-2 ps-2 pe2">
                 Being the pioneer Entrepreneurial as well as Technopreneurial University in Sri Lanka, AFGlobal has generated an exemplary studious milieu for the nation inspired by the unique theme, "Value addition to the national resources base". AFGlobal continues to produce well-rounded graduates capable of contributing to the national development with innovative solutions.
Through its past conferences, AFGlobal has contributed immensely to explore avenues of value addition to Sri Lankan resources. This time, when the whole world faces one of the greatest challenges in the human history, the COVID-19 pandemic, AFGlobal2021 focuses on exploring new horizons to combat difficulties by opening its International Research Conference (AFGlobal2021) under the theme "Exploring Potentials in Challenging Periods"
AFGlobal2021 encourages national and international academics, researchers, scientists, industrialists, professionals, graduates and undergraduate students to discuss, share and disseminate their novel and innovative ideas and research findings in all aspects of Science, Engineering, Technology and Management at this dignified forum of intellectualities actively engaged in keeping footprints in the journey of Sustainable Development though Information and Knowledge Dissemination. This prestigious event provides opportunities for scientists, industry personnel and international delegates to unite and present their scientific innovations and discuss global trends in
             </p>
             <button type="button" class="btn btn-orange  btn-sm" style={{letterSpacing:'2px'}}>More Details <i class="bi bi-arrow-right-circle-fill"></i></button>
            </div>
       </div>
       <center className="pt-5">
             <hr className="w-75 "/>
       </center>
       <div className="text-center" style={{marginTop:'7%'}}>
            <span className=" h2 text-dark text-uppercase"   style={{textDecoration:'none'}}>... YOU CAN DO ...</span>
        </div>
       <div class="card-group container">
        <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        </div>
       <div className="bg-orange pb-1" style={{marginTop:'13%',marginBottom:'7%'}}>
            <div className="text-center container pt-5 pb-4">
               <span className=" h2 text-white text-uppercase text-decoration-underline "   style={{textDecoration:'none'}}><br/>Keynote Speakers</span>
            </div>
           <center>
            <table width="80%" className="text-center ">
                <tr>
                    <td>
                        <img src="https://i.imgur.com/j3uLOBU.jpeg" alt="..." class="rounded mx-auto d-block"></img>
                        <div className="pt-3 text-white">
                            <h4 className="text-capitalize">PROFESSOR LALITH GAMAGE<br/>
                            <span style={{fontSize:'16px'}} className="fw-light text-capitalize">President/CEO Of SLIIT</span></h4>
                        </div>
                       
                    </td>
                    <td>
                        <img src="https://i.imgur.com/jDnUn2Z.jpeg" alt="..." class="rounded mx-auto d-block"></img>
                        <div className="pt-3 text-white">
                           <h4 className="text-capitalize">Prof. Koliya Pulasinghe <br/>
                            <span style={{fontSize:'16px'}} className="fw-light text-capitalize">Professor - Faculty Of Computing </span></h4>
                        </div>
                    </td>
                </tr>
            </table>
            </center>
            <div className="bg-orange pb-5">
                <div className="text-center container pt-5 pb-4">
                <span className=" h2 text-dark text-uppercase text-decoration-underline"   style={{textDecoration:'none'}}>GUESt Speakers</span>
                </div>
            <center>
                <div>
                    <img src="https://i.imgur.com/p5wl2Jz.jpg" alt="..." class="rounded mx-auto d-block"></img>
                    <div className="pt-3 text-light">
                        <h4 className="text-capitalize">Mr. Reshan Dewapura<br/>
                        <span style={{fontSize:'16px'}} className="fw-light text-capitalize"> Professional Speaker</span></h4>
                    </div>
                </div>
            </center>
        </div>
        </div>
          <div className="container" style={{marginTop:'12%',marginBottom:'5%'}}>
            <div className="text-center container">
             <div class="row ps-5">
                <div class="col-sm-1 "></div>
                <div class="col-sm-10 ">                   
                <span className=" h2 text-dark text-uppercase"   style={{textDecoration:'none'}}>Past AFGlobal Conferences</span>
                </div>
                <div class="col-sm-1 "></div>
             </div>
             <br/>
             <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://i.imgur.com/2Q14ACw.jpeg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://i.imgur.com/6Wi7jHg.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://i.imgur.com/udR8OLd.jpeg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
       </div>
       <center>
             <hr className="w-75"/>
       </center>
       <center>
           <div class="row pb-5" style={{width:'99%',marginTop:'8%'}}>
           {/* <span className=" h2 text-dark text-uppercase pt-5 mt-5 "   style={{textDecoration:'none'}}>More Days</span> */}
            <div class="col-sm-6">
               <img src="https://i.imgur.com/Y56QhWC.jpg" class="img-fluid mt-4" alt="..."/>
            </div>
            <div class="col-sm-6">
                <div class="card text-start bg-light border-0 shadow-2">
                <div class="card-body"> 
                    <h3 class="card-title mb-4">Your Comments</h3>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" placeholder="Your Name"/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="Your Name"/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Telephone Number</label>
                        <input type="email" class="form-control" placeholder="Your Telephone Number"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control"  rows="3"></textarea>
                    </div>
                    <div className="text-end">
                        <button type="button" class="btn btn-dark btn-sm">Submit</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </center>
          
       <Footer/>
    </div>
  );
}

export default Index;
