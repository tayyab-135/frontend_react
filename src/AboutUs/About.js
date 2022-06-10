import React from 'react'

export default function About() {
    return (
        <>
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
