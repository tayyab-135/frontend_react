import React from 'react'
import { Link } from 'react-router-dom'
export default function TeacherDashboard() {

    return (
        <>
      
      <div className="container my-3">
         <div><center><img my-5 src="teach.png" className="animated bounce infinite my-4" id="animated-img1" width="35%" alt="..."/></center></div>

        <center><i><h2 style={{color:'#873600'}}>Student's Request display here</h2></i></center>
        </div>
        <hr/>
  <div className='container'>
        <table class="table mx-2">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Location</th>
      <th scope="col">Qualification</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Usama</td>
      <td>usama@gmail.com</td>
      <td>03099115958</td>
      <td>Sabzazar</td>
      <td>BS Computer Science</td>
      <td><spam><button type="button" class="btn btn-info">Accept</button><button type="button" class="btn btn-danger mx-2">Reject</button></spam></td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Hamza</td>
      <td>hamza@gmail.com</td>
      <td>0313115958</td>
      <td>Gulshan Ravi</td>
      <td>O Levels</td>
      <td><spam><button type="button" class="btn btn-info">Accept</button><button type="button" class="btn btn-danger mx-2">Reject</button></spam></td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Salahudhin</td>
      <td>sal@gmail.com</td>
      <td>03099115958</td>
      <td>DHA</td>
      <td>BBA</td>
      <td><spam><button type="button" class="btn btn-info">Accept</button><button type="button" class="btn btn-danger mx-2">Reject</button></spam></td>
    </tr>
  </tbody>
</table>
</div>
        </>
    )

}
 