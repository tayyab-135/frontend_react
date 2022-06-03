import React from 'react'

export default function About() {
    return (
        <>
        <div className="container">
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-10 px-0">
          <h1 className="display-4 font-italic"> Providing best Assistant serivces for Students</h1>
          <p className="lead my-3">As parents we want the best for our kids but sometimes it can be hard to support them to the fullest extent by ourselves, especially when it comes time to helping out with stuff like schoolwork.

Having experienced it ourselves, we get that finding a tutor can often be a haphazard process, relying on word of mouth or being overwhelmed with where to start.</p>
          
        </div>
        
      </div>

      <div className="row mb-2 my-3">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-dark h-md-250 bg-">
            <div className="card-body d-flex flex-column align-items-start">
        
              <h3 className="mb-0">
                <u>Who we Actually are ?</u>
              </h3>
              
              <p className="card-text mb-auto my-3">We are a team of hardworking developers in Lahore who targeted students as they are they are future leaders to assist them in many ways.</p>
              
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" width="170px" src="st1.jpg" alt="Card image cap"/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250 ">
            <div className="card-body d-flex flex-column align-items-start">
              <h3 className="mb-0">
                <u>Our Journey</u>
              </h3>
              <div className="mb-1 text-muted"></div>
              <p className="card-text mb-auto my-3">We started this journey in order to make the education journey hasle free. We are working constantly hard in order to provide best tution services to students in their respective area.</p>
              <br/><br/>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" width="230px" src="st2.jpg" alt="Card image cap"/>
          </div>
        </div>
      </div>
    </div>
        
     <div className="container">

         <center><h2>Contact Us</h2></center>
         <hr/>
         <center><img src="contact.png"/></center>
     <form class="my-3">
     <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">Email</label>
      <input type="text" class="form-control my-1" id="validationDefault01" placeholder="name@example.com" required/>
    </div>
  <div class="col-md-6 mb-6">
    <label for="exampleFormControlTextarea1">How can we help you ? </label>
    <textarea class="form-control my-2" id="exampleFormControlTextarea1" rows="3" required></textarea>
  </div>
  <button class="btn btn-info my-3" type="submit">Send Request</button>
  </div>
  
</form>

         </div>   
        
        </>
    )
}
