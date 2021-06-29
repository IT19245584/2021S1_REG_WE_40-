import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function UpdateImportantDates() {
    var ImportantDates = reactLocalStorage.getObject('ImportantDates');
    const id = ImportantDates[0];
    const [name, setName] = useState(ImportantDates[1]);
    const [submitDate, setSubmitDate] = useState(ImportantDates[2]);
    const [dueDate, setDueDate] = useState(ImportantDates[3]);
    const [description, setDescription] = useState(ImportantDates[4]);
    const [status, setStatus] = useState(ImportantDates[5]);


    function updateProfile(e) {
        e.preventDefault();
        const newUpdateImportantDate = {
            name,
            submitDate,
            dueDate,
            description,
            status
        }
        axios.post("http://localhost:6060/importantDates/update/" + id, newUpdateImportantDate).then(() => {

            Swal.fire({
                title: "Success!",
                text: "Update Successed!",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/viewimpdate";
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
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Update Important Dates</h1>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', background: '#fdf4c9', borderRadius: '8px', boxShadow: 'inset 6px 6px 13px #f7ebde, inset -6px -6px 13px #fff9ec' }}>
                <div className="row g-0">
                    <form>
                        <div className="form-outline mb-4">
                            Name: <input type="text" id="name" className="form-control border border-dark mb-3" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Submission starting date: <input type="text" id="submitDate" className="form-control border border-dark mb-3" name="submitDate" value={submitDate} onChange={(e) => { setSubmitDate(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Due Date: <input type="text" className="form-control border border-dark mb-3" id="dueDate" rows="4" name="dueDate" value={dueDate} onChange={(e) => { setDueDate(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Description: <textarea className="form-control border border-dark mb-3" id="description" rows="4" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Status:
                            <select className="form-select" aria-label="Default select example" id="status" name="status" onChange={(e) => { setStatus(e.target.value) }}>
                                <option value={status} defaultValue>Selected - {status}</option>
                                <option defaultValue value="Pending">Pending</option>
                                <option value="Post">Post</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                        <button type="submit" onClick={updateProfile} className="btn btn-primary btn-block mb-4">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default UpdateImportantDates;