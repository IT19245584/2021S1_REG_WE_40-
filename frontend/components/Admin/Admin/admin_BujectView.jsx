import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Admin_BujectView(){
    const [income, setIncome] = useState("");
    const [expence, setExpences] = useState("");
    const [year, setYear] = useState("");
    const [IncomeAmount, setIncomeAmount] = useState("");
    const [ExpencesAmount, setExpencesAmount] = useState("");
    const [from, setFrom] = useState("");

    function saveBudject(e){
         e.preventDefault();
         const newBudject = {
            expence,
            income,
            year
        }

    axios.post("http://localhost:6060/admin_accept_budject/add",newBudject).then(() =>{
     e.preventDefault();
     Swal.fire({  
       title: "Success!",
       text: "Budject Saved",
       icon: 'success',
       confirmButtonText: "OK",
       type: "success"}).then(okay => {
          if (okay) {
            window.location.href = "/Admin_BudjectView";
          }
        });

   }).catch((err)=>{
      Swal.fire({  
       title: "error!",
       text: "Budject Not Saved",
       icon: 'error',
       confirmButtonText: "OK",
       type: "success"})
   });

    }

    const [budjects,setBudject] = useState([]);
    useEffect(() => {
       axios.get('http://localhost:6060/admin_accept_budject/retriveBudject')
       .then(res => setBudject(res.data))
       .catch(error => console.log(error));
   });

   function saveIncome(e){
         e.preventDefault();
         const type= "Income";
         const newIncome = {
            IncomeAmount, 
            from,
            type
        }
     axios.post("http://localhost:6060/admin_accept_budject/addMoney",newIncome).then(() =>{
     e.preventDefault();
     Swal.fire({  
       title: "Success!",
       text: "Income Added",
       icon: 'success',
       confirmButtonText: "OK",
       type: "success"}).then(okay => {
          if (okay) {
            window.location.href = "/Admin_BudjectView";
          }
        });

   }).catch((err)=>{
      Swal.fire({  
       title: "error!",
       text: "Income Not Saved",
       icon: 'error',
       confirmButtonText: "OK",
       type: "success"})
   });
   }

   const [TotalIncome,setTotalIcome] = useState([]);
     useEffect(() => {
    axios.get('http://localhost:6060/admin_accept_budject/searchIncome')
    .then(res => setTotalIcome(res.data))
    .catch(error => console.log(error));
  });

   const [Expences,set_Expences] = useState([]);
   useEffect(() => {
    axios.get('http://localhost:6060/admin_accept_budject/searchExpences')
    .then(res => set_Expences(res.data))
    .catch(error => console.log(error));
  });

   

   function saveExpences(e){
         e.preventDefault();
         const type= "Expences";
         const newIncome = {
           IncomeAmount, from, type
        }
         axios.post("http://localhost:6060/admin_accept_budject/addMoney",newIncome).then(() =>{
     e.preventDefault();
     Swal.fire({  
       title: "Success!",
       text: "Expences Added",
       icon: 'success',
       confirmButtonText: "OK",
       type: "success"}).then(okay => {
          if (okay) {
            window.location.href = "/Admin_BudjectView";
          }
        });

   }).catch((err)=>{
      Swal.fire({  
       title: "error!",
       text: "Expences Not Saved",
       icon: 'error',
       confirmButtonText: "OK",
       type: "success"})
   });
   }
return (
     <div className="sb-nav-fixed">
        <Nav/>
        <div id="layoutSidenav">
            <SlideNav/>
            <div id="layoutSidenav_content">
                <main>
                       <div className="container-fluid px-4 pt-5 mt-3">
                           <h2 className="text-center text-uppercase text-gold">Budject Dashboard</h2>
                       </div>
                       <div>
                         <div class="container text-center w-75 bg-light pb-3" >
                          {budjects.map((budject,key) => (
                            <div class="row">
                                <div class="col-sm">
                                    <div class="row alert alert-success rounded-0 ">
                                        <div class="col-sm  pt-4">
                                            <h3 style={{lineHeight:'14px'}}>RS.{budject.income}.00</h3>
                                            <label className="h5 fw-normal">Accepted Income</label>
                                        </div>
                                        <div class="col-sm pt-4">
                                            
                                                <h3 className="text-dark" style={{lineHeight:'14px'}}>RS.1000.00</h3>
                                                <label className="h5 fw-normal text-dark">Current Income</label>
                                             
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm alert alert-danger rounded-0">
                                     <div className="row">
                                        <div className="col-sm pt-4">
                                            <h3 style={{lineHeight:'14px'}}>RS.{budject.expence}.00</h3>
                                            <label className="h5 fw-normal">Accepted Expences</label>
                                        </div>
                                        <div className="col-sm pt-4">
                                            <h3 className="text-dark" style={{lineHeight:'14px'}}>RS.1000.00</h3>
                                            <label className="h5 fw-normal text-dark">Current Expences</label>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          ))}
                             
                             <div className="text-end">
                                <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-outline-dark fw-bold btn-sm">Add / Update Budject <i class="bi bi-plus-circle-fill"></i></button>{' '}
                                <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdropIncome" className="btn btn-outline-success fw-bold btn-sm">Add Income <i class="bi bi-caret-down-fill"></i></button>{' '}
                                <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdropExpences" className="btn btn-outline-danger fw-bold btn-sm">Add Expences <i class="bi bi-caret-up-fill"></i></button>{' '}
                                <div class="modal fade  " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content bg-dark">
                                        <div class="modal-header bg-dark">
                                            <h5 class="modal-title d-letter-spacing text-warning text-uppercase" id="staticBackdropLabel">Add New Budject</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body text-start bg-white">
                                            <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Accept Income (LKR)</label>
                                                    <input type="text" class="form-control" placeholder="" onChange={(e) =>{
                                                    setIncome(e.target.value);
                                                    }} />
                                            </div>
                                            <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Accept Expences (LKR)</label>
                                                    <input type="text" class="form-control" placeholder="" onChange={(e) =>{
                                                    setExpences(e.target.value);
                                                    }} />
                                            </div>
                                            <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Conference Year</label>
                                                    <input type="month" class="form-control" placeholder=""  onChange={(e) =>{
                                                    setYear(e.target.value);
                                                    }} />
                                            </div>
                                        </div>
                                        <div class="modal-footer bg-white">
                                            <button type="submit" onClick={saveBudject} class="btn btn-sm btn-dark" >Save</button>
                                            <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                        </div>
                                      </div>
                                </div>
                                <hr/>
                                <div class="container text-center  bg-light pb-3" >
                                    <div class="row">
                                       <div class="col-sm" id="Income">
                                             <h5 className=" mt-3 text-uppercase">Income</h5>
                                            <table class="table table-striped table-hover mt-2" style={{width:'100%'}}>
                                                    <tr className="bg-secondary">
                                                        <td class="table-primary text-white pt-2 pb-2">Amount</td>
                                                        <td class="table-secondary text-white pt-2 pb-2">Source</td>
                                                    </tr>   
                                                      {TotalIncome.map((totalIncome,index) => (
                                                        <tr className="bg-light">
                                                            <td class="table-primary  text-start  text-dark pt-2 pb-2"><span className="bg-light ps-4">RS.{totalIncome.income}.00</span></td>
                                                            <td class="table-secondary text-dark pt-2 pb-2">{totalIncome.from}</td>
                                                        </tr>   
                                                    ))}  
                                            </table>
                                            <div className="text-end mt-4">
                                              <button className="btn btn-outline-white btn-sm fw-bold" id="downloadIncome">Print &nbsp;<i class="bi bi-printer-fill"></i></button>
                                            </div>
                                       </div>
                                       <div class="col-sm" id="Expenses">
                                             <h5 className=" mt-3 text-uppercase">Expenses</h5>
                                             <table class="table table-striped table-hover mt-2" style={{width:'100%'}}>
                                                    <tr className="bg-secondary">
                                                        <td class="table-primary text-white pt-2 pb-2">Amount</td>
                                                        <td class="table-secondary text-white pt-2 pb-2">Source</td>
                                                    </tr>  
                                                   {Expences.map((expences,index) => (
                                                        <tr className="bg-light">
                                                            <td class="table-primary   text-start text-dark pt-2 pb-2"><span className="bg-light ps-4">RS.{expences.income}.00</span></td>
                                                            <td class="table-secondary text-dark pt-2 pb-2">{expences.from}</td>
                                                        </tr>   
                                                    ))}     
                                            </table>
                                            <div className="text-end mt-4">
                                            <button className="btn btn-outline-white btn-sm fw-bold" id="downloadExpenses">Print &nbsp;<i class="bi bi-printer-fill"></i></button>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="staticBackdropIncome" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelIncome" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content bg-dark">
                                        <div class="modal-header bg-dark">
                                            <h5 class="modal-title d-letter-spacing text-warning text-uppercase" id="staticBackdropLabelIncome">Add Income</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modalIncome" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body text-start bg-white">
                                            <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Income (LKR)</label>
                                                    <input type="text" class="form-control" placeholder="" onChange={(e) =>{
                                                    setIncomeAmount(e.target.value);
                                                    }} />
                                            </div>
                                            <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Income Source</label>
                                                    <input type="text" list="incomeFromList"  class="form-control" placeholder="" onChange={(e) =>{
                                                    setFrom(e.target.value);
                                                    }} />
                                                    <datalist id="incomeFromList">
                                                        <option value="Donation"/>
                                                        <option value="Selling Item"/>
                                                    </datalist>
                                            </div>
                                        </div>
                                        <div class="modal-footer bg-white">
                                            <button type="submit" onClick={saveIncome} class="btn btn-sm btn-dark" >Save</button>
                                            <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                        </div>
                                      </div>
                                </div>
                                <div class="modal fade" id="staticBackdropExpences" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelExpences" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content bg-dark">
                                        <div class="modal-header bg-dark">
                                            <h5 class="modal-title d-letter-spacing text-warning text-uppercase" id="staticBackdropLabelExpences">Add Expences</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modalIncome" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body text-start bg-white">
                                            <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Expences (LKR)</label>
                                                    <input type="text" class="form-control" placeholder="" onChange={(e) =>{
                                                    setIncomeAmount(e.target.value);
                                                    }} />
                                            </div>
                                            <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Expences For</label>
                                                    <input type="text" list="expenceFromList"  class="form-control" placeholder="" onChange={(e) =>{
                                                    setFrom(e.target.value);
                                                    }} />
                                                    <datalist id="expenceFromList">
                                                        <option value="Item Buy"/>
                                                        <option value="Prizes"/>
                                                        <option value="Salary"/>
                                                    </datalist>
                                            </div>
                                        </div>
                                        <div class="modal-footer bg-white">
                                            <button type="submit" onClick={saveExpences} class="btn btn-sm btn-dark" >Save</button>
                                            <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                        </div>
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