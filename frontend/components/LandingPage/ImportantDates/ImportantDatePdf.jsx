import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class ImportantDatePdf extends Component {
    state = {
        dates: []
    }

    componentDidMount() {
        axios.get('http://localhost:6060/importantDates/view')
            .then(response => {
                const dates = response.data;
                this.setState({ dates });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    printDocument() {
        const input = document.getElementById('pdfdiv');
        html2canvas(input)
            .then((canvas) => {
                var imgWidth = 200;
                var pageHeight = 290;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4')
                var position = 5;
                var heightLeft = imgHeight;
                pdf.addImage(imgData, 'JPEG', 5, position, imgWidth, imgHeight);
                pdf.save("ImportantDates.pdf");
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col main1" style={{ height: "100%" }}>
                    <div id="pdfdiv" className="col main1" style={{ height: "100%", marginBottom:'100px' }}>
                        <br></br>
                        <h1 style={{ color: "DodgerBlue", fontSize: '40px', fontWeight: "bold", height: '90px' }}><center>AFGlobal - 2021 Important Dates</center></h1>
                        <div>
                            <div className="table-responsive">
                                <table className="table" style={{ border: '1px solid black', fontSize: "20px", alignContent: 'center' }}>
                                    <thead className="theadss">
                                        <tr>
                                            <th>Important Detail</th>
                                            <th>Submission Date</th>
                                            <th>Due Date</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.dates.map(item => {
                                            return (
                                                <tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.submitDate}</td>
                                                    <td>{item.dueDate}</td>
                                                    <td>{item.description}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <center><button style={{ marginTop:'50px',width: "50%", cursor: "pointer", backgroundColor: "orange", border: "black", padding: "5px 20px", margin: "2px 1px", borderRadius: "2px", fontWeight: "bold" }} onClick={this.printDocument}  >GET IMPORTANT DATES PDF</button></center>
                </div>

            </div>

        );
    }
}

export default ImportantDatePdf;