import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navigation from '../DashboardNavigation/Navigation';

export default function ViewPastProceeding() {

    const [PastProceeding, setPastProceeding] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6060/pastProceeding/view/')
            .then(res => setPastProceeding(res.data))
            .catch(error => console.log(error));
    })

    function deletePastProceeding(id) {
        axios.delete('http://localhost:6060/pastProceeding/delete/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Past Proceedingr Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/viewpast";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Past Proceedingr Deleting Not Success",
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

    function updatePastProceeding(id, image, description, status) {
        reactLocalStorage.setObject("PastProceeding", [id, image, description, status]);
        window.location.href = "/updatepast";
    }
    return (
        <div>
            <div>
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>View Past Proceeding</h1>
            </div>
            <Navigation/>
            </div>
            <div className="container">
                <a href="/addpast">
                    <div className="text-end mb-4">
                        <button type="button" class="btn btn-secondary btn-sm">+ Add New Past Proceeding</button>
                    </div>
                </a>
                <div className="row">
                    {PastProceeding.map((PastProceeding, key) => (
                        <div className="col-sm-3 mt-3">
                            <div className="card">
                                <div className="text-center">
                                    <img className="card-img-top " style={{ width: '100%' }} src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + PastProceeding.image} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <span className="fw-bold">Description : </span>{PastProceeding.description}<br />
                                        <span className="fw-bold">Status : </span>{PastProceeding.status}<br />
                                        <span className="fw-bold">Joined Date : </span>{PastProceeding.date}</p>
                                </div>
                                <div className="card-footer bg-white border-0 text-end">
                                    <button type="button" onClick={() => deletePastProceeding(PastProceeding._id)} class="btn btn-danger btn-sm">Delete <i class="bi bi-trash"></i></button>{' '}
                                    <button type="button" onClick={() => updatePastProceeding(PastProceeding._id, PastProceeding.image, PastProceeding.description, PastProceeding.status)} class="btn btn-success btn-sm">Update <i class="bi bi-pencil-square"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}