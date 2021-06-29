import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function UpdateAboutUs() {
    var Aboutus = reactLocalStorage.getObject('Aboutus');
    const id = Aboutus[0];
    const [description, setDescription] = useState(Aboutus[1]);
    const [dateRange, setDateRange] = useState(Aboutus[2]);
    const [conferenceStart, setConferenceStart] = useState(Aboutus[3]);
    const [conferenceEnd, setConferenceEnd] = useState(Aboutus[4]);
    const [conferenceWebsite, setConferenceWebsite] = useState(Aboutus[5]);
    const [organizerPhone, setOrganizerPhone] = useState(Aboutus[6]);
    const [organizerEmail, setOrganizerEmail] = useState(Aboutus[7]);
    const [organizerWebsite, setOrganizerWebsite] = useState(Aboutus[8]);
    const [status, setStatus] = useState(Aboutus[9]);

    function updateProfile(e) {
        e.preventDefault();
        const newUpdateAboutUs = {
            description,
            dateRange,
            conferenceStart,
            conferenceEnd,
            conferenceWebsite,
            organizerPhone,
            organizerEmail,
            organizerWebsite,
            status
        }
        axios.post("http://localhost:6060/aboutus/update/" + id, newUpdateAboutUs)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Update Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/viewaboutus";
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
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Update About US Details</h1>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div className="row g-0">
                    <form>
                        <div className="form-outline mb-4">
                            Description: <textarea id="description" className="form-control border border-dark mb-3" rows="4" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            dateRange of conference: <input type="text" id="dateRange" className="form-control border border-dark mb-3" name="dateRange" value={dateRange} onChange={(e) => { setDateRange(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Conference Starting dateRange: <input type="text" id="conferenceStart" className="form-control border border-dark mb-3" name="conferenceStart" value={conferenceStart} onChange={(e) => { setConferenceStart(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Conference End dateRange: <input type="text" id="conferenceEnd" className="form-control border border-dark mb-3" name="conferenceEnd" value={conferenceEnd} onChange={(e) => { setConferenceEnd(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Website of Conference: <input type="text" id="conferenceWebsite" className="form-control border border-dark mb-3" name="conferenceWebsite" value={conferenceWebsite} onChange={(e) => { setConferenceWebsite(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Organizing committee phone number: <input type="text" id="organizerPhone" className="form-control border border-dark mb-3" name="organizerPhone" value={organizerPhone} onChange={(e) => { setOrganizerPhone(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Email of Organizing committee: <input type="text" id="organizerEmail" className="form-control border border-dark mb-3" name="organizerEmail" value={organizerEmail} onChange={(e) => { setOrganizerEmail(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Website of Organizing committee: <input type="text" id="organizerWebsite" className="form-control border border-dark mb-3" name="organizerWebsite" value={organizerWebsite} onChange={(e) => { setOrganizerWebsite(e.target.value) }} required />
                        </div>
                        <div className="form-outline mb-4">
                            Status:
                            <select className="form-select" aria-label="Default select example" id="status" name="status" onChange={(e) => { setStatus(e.target.value) }}>
                                <option value={status} defaultValue>Selected - {status}</option>
                                <option defaultValue >Pending</option>
                                <option>Post</option>
                                <option>Rejected</option>
                            </select>
                        </div>
                        <button type="submit" onClick={updateProfile} className="btn btn-primary btn-block mb-4">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

