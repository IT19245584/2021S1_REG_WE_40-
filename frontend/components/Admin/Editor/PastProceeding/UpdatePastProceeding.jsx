import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function UpdatePastProceeding() {
    var PastProceeding = reactLocalStorage.getObject('PastProceeding');
    const id = PastProceeding[0];
    const [images, setImage] = useState('https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + PastProceeding[1]);
    const [description, setDescription] = useState(PastProceeding[2]);
    const [status, setStatus] = useState(PastProceeding[3]);

    function updateProfile(e) {
        e.preventDefault();
        const newUpdatePastProceeding = {
            images,
            description,
            status
        }
        axios.post("http://localhost:6060/pastProceeding/update/" + id, newUpdatePastProceeding).then(() => {

            Swal.fire({
                title: "Success!",
                text: "Update Successed!",
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
                text: "Update Not Success",
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
        })
    }

    return (
        <div>
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Update Past Proceeding</h1>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div className="row g-0">
                    <div className="form-outline mb-4">
                        <label className="form-label" for="customFile">Add Image</label>
                        <img type="file" value={images} onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" id="customFile" required />
                    </div>
                    <div className="form-outline mb-4">
                        Description: <textarea className="form-control border border-dark mb-3" id="description" rows="4" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} required />
                    </div>
                    <div className="form-outline mb-4">
                        Status:
                        <select className="form-select" aria-label="Default select example" id="status" name="status" onChange={(e) => { setStatus(e.target.value) }}>
                            <option value={status} selected>Selected - {status}</option>
                            <option selected value="Pending">Pending</option>
                            <option value="Post">Post</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <button type="submit" onClick={updateProfile} className="btn btn-primary btn-block mb-4"><i className="bi bi-pencil-square"></i></button>
                    <a href="/vieworg">
                        <button type="button" className="btn btn-outline-dark btn-sm">Cancel<i class="bi bi-backspace"></i></button>
                    </a>
                </div>
            </div>
        </div>
    );
}
