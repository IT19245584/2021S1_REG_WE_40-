import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navigation from '../../DashboardNavigation/Navigation';

export default function ViewTechnicalCommittee() {

    const [TechnicalCommittee, setTechnicalCommittee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6060/techCommittee/viewTechnicalCommittee/')
            .then(res => setTechnicalCommittee(res.data))
            .catch(error => console.log(error));
    })

    function deleteTechnicalCommitteeMember(id) {
        axios.delete('http://localhost:6060/techCommittee/deleteTechnicalCommittee/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Technical Committee Member Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/viewtech";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Technical Committee Member Deleting Not Success",
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            });
    }

    function updateTechnicalCommitteeMember(id, name, image, department, description, status) {
        reactLocalStorage.setObject("TechnicalCommittee", [id, name, image, department, description, status]);
        window.location.href = "/updatetech";
    }
    return (
        <div>
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>View technical Committee</h1>
                </div>
            </div>
            <Navigation/>
            <div className="container">
                <a href="/addtec">
                    <div className="text-end mb-4">
                        <button type="button" class="btn btn-secondary btn-sm"> + Add New Technical committee Member</button>
                    </div>
                </a>
                <div className="row">
                    {TechnicalCommittee.map((TechnicalCommitteeMember, key) => (
                        <div class="col-sm-3 mt-3">
                            <div class="card">
                                <div className="text-center">
                                    <img className="card-img-top " style={{ width: '100%' }} src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + TechnicalCommitteeMember.image} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-capitalize">{TechnicalCommitteeMember.name}</h5>
                                    <p className="card-text">
                                        <span className="fw-bold">Department : </span>{TechnicalCommitteeMember.department}<br />
                                        <span className="fw-bold">Description : </span>{TechnicalCommitteeMember.description}<br />
                                        <span className="fw-bold">Status : </span>{TechnicalCommitteeMember.status}<br />
                                        <span className="fw-bold">Joined Date : </span>{TechnicalCommitteeMember.date}</p>
                                </div>
                                <div className="card-footer bg-white border-0 text-end">
                                    <button type="button" onClick={() => deleteTechnicalCommitteeMember(TechnicalCommitteeMember._id)} className="btn btn-danger btn-sm">Delete <i class="bi bi-trash"></i></button>{' '}
                                    <button type="button" onClick={() => updateTechnicalCommitteeMember(TechnicalCommitteeMember._id, TechnicalCommitteeMember.name, TechnicalCommitteeMember.image, TechnicalCommitteeMember.department, TechnicalCommitteeMember.description, TechnicalCommitteeMember.status)} class="btn btn-success btn-sm">Update <i class="bi bi-pencil-square"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}