import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function  Reviewer_WorkShop_ViewTable(){

    const [Workshops, setWorkshops] = useState([]);

    const [topic, setTopic] = useState("");
    const [organization, setOrganization] = useState("");
    const [presenter, setPresenter] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [qualification, setQualification] = useState("");
    const [platform, setPlatform] = useState("");
    const [date, setDate] = useState("");
    const [from_time, setFrom_time] = useState("");
    const [to_time, setTo_time] = useState("");
    const [document, setDocument] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:6060/workshop/view-all")
        .then(res => setWorkshops(res.data))
        .catch(error => console.log(error));
    });

    function remove(id){
        axios.delete("http://localhost:6060/workshop/delete/"+id).then(() =>{
        	Swal.fire({  
                title: "Success!",
                text: "Workshop Deleted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/view-all-ws";
                    }
                });
        }).catch((err)=>{
            Swal.fire({  
                title: "Error!",
                text: "Workshop Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
        });
    }

    function update(id, topic, organization, purpose, team_leader, presenter, phone, email, qualification, platform, date, from_time, to_time, document, description ){
        reactLocalStorage.setObject("Reviewer_Workshop_Edit", [id, topic, organization, purpose, team_leader, presenter, phone, email, qualification, platform, date, from_time, to_time, document, description]);
        window.location.href = "/update"
    }

    function show(id, topic, organization, purpose, team_leader, presenter, phone, email, qualification, platform, date, from_time, to_time, document, description ){
        reactLocalStorage.setObject("Reviewer_Workshop_Show", [id, topic, organization, purpose, team_leader, presenter, phone, email, qualification, platform, date, from_time, to_time, document, description]);
        window.location.href = "/show"
    }

    return(
            <div className="container">
                <h3>View Workshop Details</h3>
                
                <table className="table table-responsive table-hover">
                    <thead className="bg-warning">
                        <tr>
                            <th scope = "col"  >No</th>
                            <th scope = "col"  >Topic</th>
                            <th scope = "col" >Oraganization</th>
                            <th scope = "col" >Presenter</th>
                            <th scope = "col" >Phone</th>
                            <th scope = "col" >Email</th>
                            <th scope = "col" >Qualification</th>
                            <th scope = "col" >Platform</th>
                            <th scope = "col" >Date</th>
                            <th scope = "col" >From</th>
                            <th scope = "col" >To</th>
                            <th scope = "col" >Upload</th>
                            <th scope = "col" >Description</th>
                            <th scope = "col" >Status</th>
                            <th scope = "col" >Action</th>
                        </tr>  
                    </thead>  
                    <tbody>
                            {Workshops.map((workshop, key) => {
			                return (
                        <tr>
                            <td className="" scope="row">{key+1}</td>
                            <td>{workshop.topic}</td>
                            <td>{workshop.organization}</td>
                            <td>{workshop.presenter}</td>
                            <td>{workshop.phone}</td>
                            <td>{workshop.email}</td>
                            <td>{workshop.qualification} </td>
                            <td>{workshop.platform}</td>
                            <td>{workshop.date}</td>
                            <td>{workshop.from_time}</td>
                            <td>{workshop.to_time}</td>
                            <td>{workshop.document}</td>
                            <td>{workshop.description}</td>
                            <td class="text-secondary"> {workshop.status} 
                                {/* <a  onClick={change(workshop.status="approved")}> 
                                    <i class="text-secondary bi bi-mask"></i>
                                </a>     */}
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col-4">
                                        <a onClick={() => remove(workshop._id)} className="m-1 text-danger">
                                            <i className="bi bi-trash-fill"></i>
                                        </a>
                                    </div> 
                                <div className="col-4">
                                    <a onClick={() => update(
                                        workshop._id, workshop.topic, workshop.organization, workshop.purpose, workshop.team_leader, workshop.presenter, workshop.phone, workshop.email, workshop.qualification, workshop.platform, workshop.date, workshop.from_time, workshop.to_time, workshop.document, workshop.description
                                        )} className="m-1">
                                        <i className="bi bi-pencil-square"></i>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a onClick={() => show(
                                        workshop._id, workshop.topic, workshop.organization, workshop.purpose, workshop.team_leader, workshop.presenter, workshop.phone, workshop.email, workshop.qualification, workshop.platform, workshop.date, workshop.from_time, workshop.to_time, workshop.document, workshop.description
                                        )} className="m-1">
                                        <i class="bi bi-filter-square"></i>
                                    </a>
                                </div>   
                            </div>
                        </td>
                    </tr>   
                );
            })}
                </tbody>  
            </table>   
        </div>
        )
}
