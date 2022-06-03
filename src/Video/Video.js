import React from 'react'
import  bigImage from "./Video/Background-img.mp4"
export default function video() {
    return (
        <>
        <div className="container">
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
        <source src={bigImage} type="video/mp4" />
      </video>
        </div>
        </>
    )
}
