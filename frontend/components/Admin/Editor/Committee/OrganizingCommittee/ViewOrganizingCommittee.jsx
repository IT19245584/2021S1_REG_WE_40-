import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navigation from '../../DashboardNavigation/Navigation';

export default function ViewOrganizingCommittee() {

    const [OrganizingCommittee, setOrganizingCommittee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6060/orgCommittee/viewOrganizingCommittee/')
            .then(res => setOrganizingCommittee(res.data))
            .catch(error => console.log(error));
    })

    function deleteOrganizingCommitteeMember(id) {
        axios.delete('http://localhost:6060/orgCommittee/deleteOrganizingCommittee/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Organizing Committee Member Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/ViewOrg";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Organizing Committee Member Deleting Not Success",
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

    function updateOrganizingCommitteeMember(id, name, image, department, description, status) {
        reactLocalStorage.setObject("OrganizingCommittee", [id, name, image, department, description, status]);
        window.location.href = "/updateorg";
    }
    return (
        <div>
            <div>
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>View Organizing Committee</h1>
            </div>
            <Navigation/>
            </div>
            <div className="container">
                <a href="/addorg">
                    <div className="text-end mb-4">
                        <button type="button" class="btn btn-secondary btn-sm">+ Add New Organizing Committee Member</button>
                    </div>
                </a>
                <div className="row">
                    {OrganizingCommittee.map((OrganizingCommitteeMember, key) => (
                        <div className="col-sm-3 mt-3" key={key}>
                            <div className="card">
                                <div className="text-center">
                                    <img className="card-img-top " style={{ width: '100%' }} src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + OrganizingCommitteeMember.image} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-capitalize">{OrganizingCommitteeMember.name}</h5>
                                    <p className="card-text">
                                        <span className="fw-bold">Department : </span>{OrganizingCommitteeMember.department}<br />
                                        <span className="fw-bold">Description : </span>{OrganizingCommitteeMember.description}<br />
                                        <span className="fw-bold">Status : </span>{OrganizingCommitteeMember.status}<br />
                                        <span className="fw-bold">Joined Date : </span>{OrganizingCommitteeMember.date}</p>
                                </div>
                                <div className="card-footer bg-white border-0 text-end">
                                    <button type="button" onClick={() => deleteOrganizingCommitteeMember(OrganizingCommitteeMember._id)} class="btn btn-danger btn-sm">Delete <i class="bi bi-trash"></i></button>{' '}
                                    <button type="button" onClick={() => updateOrganizingCommitteeMember(OrganizingCommitteeMember._id, OrganizingCommitteeMember.name, OrganizingCommitteeMember.image, OrganizingCommitteeMember.department, OrganizingCommitteeMember.description, OrganizingCommitteeMember.status)} class="btn btn-success btn-sm">Update <i class="bi bi-pencil-square"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}