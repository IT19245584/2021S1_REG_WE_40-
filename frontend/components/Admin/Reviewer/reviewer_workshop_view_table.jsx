
import React, {Component} from 'react';
import axios from 'axios';

export default function  Reviewer_WorkShop_ViewTable(){

        return(
            <div class="container">
                <h3>View Workshop Details</h3>
                <table className="table table-responsive table-hover">
                    <thead className="bg-warning">
                        <tr>
                            <th scope = "col"  class="">No</th>
                            <th scope = "col"  class="">Topic</th>
                            <th scope = "col" >Oraganization</th>
                            <th scope = "col" >Presenter</th>
                            <th scope = "col" >Phone</th>
                            <th scope = "col" >Email</th>
                            <th scope = "col" >Qualification</th>
                            <th scope = "col" >Platform</th>
                            <th scope = "col" >Date</th>
                            <th scope = "col" >From</th>
                            <th scope = "col" >To</th>
                            <th scope = "col" >Upload</th>
                            <th scope = "col" >Description</th>
                            <th scope = "col" >Status</th>
                            <th scope = "col" >Action</th>
                        </tr>  
                    </thead>  
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>er</td>
                            <td>fe</td>
                            <td>sdf</td>
                            <td>wer</td>
                            <td>asdsa</td>
                            <td>asda </td>
                            <td>sad</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd </td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd </td>
                        </tr>   
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td> </td>
                        </tr>   
                    </tbody>  
                </table>   

            </div>
        )
    
}
