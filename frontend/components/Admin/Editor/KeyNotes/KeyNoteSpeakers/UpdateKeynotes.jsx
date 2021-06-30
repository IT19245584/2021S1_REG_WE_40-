import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function UpdateKeyNoteSpeaker() {
    var KeynoteSpeaker = reactLocalStorage.getObject('KeynoteSpeaker');
    const id = KeynoteSpeaker[0];
    const [name, setName] = useState(KeynoteSpeaker[1]);
    const [imageSelected, setimageSelected] = useState('https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + KeynoteSpeaker[2]);
    const [profession, setprofession] = useState(KeynoteSpeaker[3]);
    const [description, setdescription] = useState(KeynoteSpeaker[4]);
    const [status, setstatus] = useState(KeynoteSpeaker[5]);
    

    function updateKeyNoteSpeaker(e) {
        e.preventDefault();
        const newUpdateKeynoteSpeaker = {
            name,
            imageSelected,
            profession,
            description,
            status
        }

        axios.post("http://localhost:6060/keynoteSpeaker/update/" + id, newUpdateKeynoteSpeaker).then(() => {

            Swal.fire({
                title: "Success!",
                text: "Update Successed!",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/viewkeynote";
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
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add Guest Speakers</h1>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px'}}>
                <div className="row g-0">
                    <div className="form-outline mb-4">
                        Name: <input type="text" id="name" className="form-control border border-dark mb-3" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="customFile">Add Image</label>
                        <img type="file"  className="form-control" value={imageSelected} id="customFile" />
                    </div>
                    <div className="form-outline mb-4">
                        Profession: <input type="text" id="profession" className="form-control border border-dark mb-3" name="profession" value={profession} onChange={(e) => { setprofession(e.target.value) }} required />
                    </div>
                    <div className="form-outline mb-4">
                        Description: <textarea className="form-control border border-dark mb-3" id="description" rows="4" name="description" value={description} onChange={(e) => { setdescription(e.target.value) }} required />
                    </div>
                    <div className="form-outline mb-4">
                        Status:
                        <select className="form-select" aria-label="Default select example" id="status" name="status" onChange={(e) => { setstatus(e.target.value) }} required >
                        <option value={status} >Selected - {status}</option>
                            <option defaultValue value="Pending">Pending</option>
                            <option value="Post">Post</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <button type="submit" onClick={updateKeyNoteSpeaker} className="btn btn-primary btn-block mb-4">Save</button>
                    <a href="/viewkeynote">
                        <button type="button" className="btn btn-outline-dark btn-sm">Cancel<i class="bi bi-backspace"></i></button>
                    </a>
                </div>
            </div>
        </div >
    )
}