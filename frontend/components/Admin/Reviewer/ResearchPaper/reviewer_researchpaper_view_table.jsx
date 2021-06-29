import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function  Reviewer_ResearchPaper_ViewTable(){
    
    const [papers, setPapers] = useState([]);

    const [topic, setTopic] = useState("");
    const [university, setUniversity] = useState("");
    const [purpose, setPurpose] = useState("");
    const [team_leader, setTeam_leader] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [document, setDocument] = useState("");
    const [description, setDescription] = useState("");

    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const type = urlParams.get('id');
    // console.log(type);

    // const setUpload = () => {
    //     if(document !== 'false'){
    //         const FormData = new FormData();
    //         FormData.append("file", document);
    //         FormData.append("upload_preset", "ml_default");

    //         //link to cloudnary
    //         axios.post("https://", FormData).then((response) => { 
    //             const pdf = document.name;
    //             const addResearchPaper= {
    //                 topic,
    //                 university,
    //                 purpose,
    //                 team_leader,
    //                 email,
    //                 phone,
    //                 document,
    //                 description,
    //             }
    //         });
    //     }
    // }

        // const [papers, setPaper] = useState ([]);
        // useEffect(() => {
        //     axios.get("" + id)
        //     .then(res => setPaper(res.data))
        //     .catch(error => console.log(error));
        // });

        useEffect(() => {
            axios.get("http://localhost:8080/researchpapers/")
            .then(res => setPapers(res.data))
            .catch(error => console.log(error));
        })

    function remove(id){
        axios.delete("http://localhost:8080/students/delete/"+id).then(() =>{
        	Swal.fire({  
                title: "Success!",
                text: "Research Paper Deleted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/";
                    }
                });
        }).catch((err)=>{
            Swal.fire({  
                title: "Error!",
                text: "Research Paper Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
        });
    }

    function update(id, topic, university, purpose, team_leader, email, phone, document, description){
        reactLocalStorage.setObject("Reviewer_ResearchPaper_Edit", [id, topic, university, purpose, team_leader, email, phone, document, description]);
        window.location.href = "/update"
    }

    return(
        <div class="container">
            <h3>View Research Paper Details</h3>
            <table className="table table-responsive table-hover">
                <thead className="bg-warning">
                    <tr>
                        <th scope = "col"  >No</th>
                        <th scope = "col"  >Topic</th>
                        <th scope = "col" >University</th>
                        <th scope = "col" >Purpose</th>
                        <th scope = "col" >Team Leader</th>
                        <th scope = "col" >Email</th>
                        <th scope = "col" >Phone</th>
                        <th scope = "col" >Document</th>
                        <th scope = "col" >Description</th>
                        <th scope = "col" >Status</th>
                        <th scope = "col" >Action</th>
                    </tr>  
                </thead>  
                <tbody>
                {papers.map((paper, key) => {
                    <tr>
                        <td scope="row">1</td>
                        <td>{paper.topic}</td>
                        <td>{paper.university}</td>
                        <td>{paper.purpose}</td>
                        <td>{paper.team_leader}</td>
                        <td>{paper.email}</td>
                        <td>{paper.phone}</td>
                        <td>{paper.document}</td>
                        <td>{paper.description}</td>
                        <td>{paper.status}</td> 
                        <td>
                            <i class="bi bi-trash-fill"></i>
                        </td>
                        <td>
                            <div class="row">
                                <div class="col-6">
                                    <a onClick={() => remove(paper._id)} class="m-1 text-danger">
                                        <i class="bi bi-trash-fill"></i>
                                    </a>
                                </div> 
                                <div class="col-6">
                                    <a onClick={() => update(
                                        paper._id, paper.topic, paper.university, paper.purpose, paper.team_leader, paper.email, paper.phone, paper.document, paper.description
                                        )} class="m-1">
                                        <i class="bi bi-pencil-square"></i>
                                    </a>
                                </div>   
                            </div>
                        </td>
                        
                    </tr>   
                })}   
                </tbody>  
            </table>   

        </div>
    )

}