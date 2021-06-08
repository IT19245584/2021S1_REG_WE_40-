import React, { Component } from 'react';

class ContactBody extends Component {
    render() { 
        return ( 
            <div className="col-md-14 col-sm-12" style={{maxWidth:'70rem',margin:'auto',padding:'10px'}}>
                    <div style={{height:'300px'}}>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 border border-dark mb-3">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Address</h5>
                                        <p class="card-text" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>SLIIT, New Kandy Road, Malabe, Sri Lanka</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border border-dark mb-3">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Phone Number</h5>
                                        <p class="card-text" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>+94 11 7544806</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border border-dark mb-3">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Email</h5>
                                        <email class="card-text" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>info@sliit.lk</email>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}}>Contact Us for More Details</h3>
                            <form>
                                <div class="form-outline mb-4">
                                    Name: <input type="text" id="form4Example1" class="form-control border border-dark mb-3" required />
                                    
                                </div>
                                <div class="form-outline mb-4">
                                   Email: <input type="email" id="form4Example2" class="form-control border border-dark mb-3" required/>
                                   
                                </div>
                                <div class="form-outline mb-4">
                                   Subject: <input type="text" class="form-control border border-dark mb-3" id="form4Example3"/>
                                    
                                </div> 
                                <div class="form-outline mb-4">
                                    Message: <textarea class="form-control border border-dark mb-3" id="form4Example4" rows="4" required/>
                                  
                                </div>                       
                                <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
                            </form>
                        </div>
                        <div class="col">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985117158014!2d79.9729445!3d6.9146775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1622003456353!5m2!1sen!2slk"
                            style={{minWidth:"600px", maxWidth:"600px", height:"500px"}}/>
                        </div> 
                    </div>
                </div>
         );
    }
}
 
export default ContactBody;