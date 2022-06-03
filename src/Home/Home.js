import React from 'react'
import bgImage from '../Video/Background-img.mp4';
const Home = () => 
{
  return (
    <>

<div className="carousel-caption d-none d-md-block">
        <h1>Online Monitoring System</h1>
        <p>This platform provides you the quality of education through its high profile tutors at your doorstep. 
           We also recruit tutors based on their expertise and qualification level.
           They effectively deliver key concepts and provide you proper counseling to achieve your goals.</p>
        <p>TutorsChain brings highly qualified and experienced tutors especially for:</p>
        <p>𝗔/𝗢 𝗹𝗲𝘃𝗲𝗹𝘀</p>
        <p>𝗙𝗦𝗰</p>
        <p>𝗜𝗖𝗦</p>
        <p>𝗠𝗮𝘁𝗿𝗶𝗰</p>
        <h2>TutorsChain | 𝗠𝗼𝘂𝗹𝗱𝗶𝗻𝗴 𝗬𝗼𝘂𝗻𝗴 𝗠𝗶𝗻𝗱𝘀</h2>
      </div>
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>


   <div className="container">
     
        <div class="b-example-divider"></div>

        <div class="container col-xxl-8 px-4 py-5 ">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6 my-5">
              <img src="pic1.jpg" class=" animated bounce infinite d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">A Very Warm Welcome to TutorsChain.</h1>
              <p class="lead">This Platform provides the quality of education through its high-profile tutors at your doorstep.Our aim is to secure student's careers in their respective descipline and taking account of their best interest by providing expert and qualified home tutors.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-info btn-lg px-4">Connect with Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-5">
            <img src="pic2.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="750" height="600" loading="lazy" />
          </div>
          <div class="col-md-7">
          <br/><br/><br/>
            <h1>And Lastly, this one.</h1>
            <p class="lead my-7">We facilitate students in acquring education without facing any hurdle in their targeted aim. We also recruit tutors on the basis of their expertise and qualification level. This Platform provides an opportunity for tutors to propel in their profession. So to achieve what I set out to do, We introduced <strong>TutorsChain</strong> Thanks!</p>
          </div>

        </div>
      </div>


      <div className="container">
        <div class="b-example-divider"></div>

        <div class="container px-4 py-5" id="icon-grid">
          <h2 class="pb-2 border-bottom">Services Provided by Us</h2>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div class="col mx-5 d-flex align-items-start">
              <img src="student.png" class="flex me-3" width="90px" height="90px" />
              <div>
                <h4 class="fw-bold mb-0 ">For Students</h4>
                <p>Students can study from highly qualified teachers in their respective areas with both options available Online and Physical.</p>
              </div>
            </div>
            <div class="mx-5 col d-flex align-items-start">

              <img src="teacher.png" class="flex me-3" width="120px" height="90px" />
              <div>
                <h4 class="fw-bold mb-0">For Teachers</h4>
                <p>Teachers can register and after that we will connect students with them. We will try out best to provide very smooth expereince to them.</p>
              </div>
            </div>
            <div class="mx-2 col d-flex align-items-start">
              <img src="degree.png" class="flex me-3" width="90px" height="90px" />

              <div>
                <h4 class="fw-bold mb-0">Others</h4>
                <p>We are also trying to keep the notes on our platform to assit you more in studies.</p>
              </div>
            </div>

          </div>
        </div>
      </div> 
    </>
  )
}

export default Home;
