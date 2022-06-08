import React from 'react'

export default function StudentDashboard() {
    return (
        
        <>
<div className="container my-3">
         <div><center><img my-5 src="stu.png" className="animated bounce infinite my-4" id="animated-img1" width="30%" alt="..."/></center></div>
        
         <div className="row">

<div className="col-6 col-md-4"><input type="text" className="form-control" placeholder="Living Area" name="phone" id="inputNumber" required/></div>

<div className="col-6 col-md-4"><input type="text" className="form-control" placeholder="Qualification" name="name" id="inputName" required/></div>

<div className="col-6 col-md-4"><button type="submit" className="btn btn-info">Seacrch</button></div>
</div><hr/><br/><br/>
    
        </div>

       <div className='container my-5'>
        <div className="row">

  <div className="col-6 col-md-4">
  </div>
 
  <div className="col-6 col-md-4"><input type="text" className="form-control" placeholder="Qualification" name="name" id="inputName" required/></div>

  <div className="col-6 col-md-4"><button type="submit" className="btn btn-info">Seacrch</button></div>
</div><hr/><br/><br/>
       </div>

  
        </>
    )
}
