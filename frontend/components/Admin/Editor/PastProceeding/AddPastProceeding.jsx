import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddPastProceeding() {
    const [description, setdescription] = useState("");
    const [status, setstatus] = useState("");
    const [imageSelected, setimageSelected] = useState("");

    const onSubmit = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "ml_default");

        axios.post("https://api.cloudinary.com/v1_1/applicationframework2021/image/upload", formData).then((response) => {
            const image = imageSelected.name;
            const AddPastProceeding = {
                image,
                description,
                status
            }
            axios.post("http://localhost:6060/pastProceeding/add", AddPastProceeding)
                .then(() => {
                    Swal.fire({
                        title: "Success!",
                        text: "Past Proceeding Saved",
                        icon: 'success',
                        confirmButtonText: "OK",
                        type: "success"
                    }).then(okay => {
                        if (okay) {
                            window.location.href = "/viewguest";
                        }
                    });
                }).catch((err) => {
                    Swal.fire({
                        title: "Error!",
                        text: "Unable to save Past Proceeding",
                        icon: 'error',
                        confirmButtonText: "OK",
                        type: "success"
                    })
                })
        })
    }

    return (
        <div data-testid="past-1">
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add Past Proceeding</h1>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div className="row g-0">
                    <div className="form-outline mb-4">
                        <label className="form-label" for="customFile">Add Image</label>
                        <input data-testid="image-input" type="file" onChange={(e) => { setimageSelected(e.target.files[0]) }} className="form-control" id="customFile" required />

                    </div>
                    <div className="form-outline mb-4">
                        Description: <textarea className="form-control border border-dark mb-3" id="description" rows="4" name="description" onChange={(e) => { setdescription(e.target.value) }} required />

                    </div>
                    <div className="form-outline mb-4">
                        Status:
                        <select className="form-select" aria-label="Default select example" id="status" name="status" onChange={(e) => { setstatus(e.target.value) }}>
                            <option defaultValue value="Pending">Pending</option>
                            <option value="Post">Post</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <button type="submit" onClick={onSubmit} className="btn btn-primary btn-block mb-4">Save</button>
                </div>
            </div>
        </div>
    );
}
