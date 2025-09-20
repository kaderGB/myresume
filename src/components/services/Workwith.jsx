import React, { useEffect } from 'react'
import Profil from '../../assets/profil.JPG'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Workwith = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='workwithme container section' id='workwithme' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className='div_work'></div>
      <h2 className="section_title">Why work with Me</h2>
      <div className='workwith_container' id="workwith" data-aos="fade-right">
            <img src={Profil} alt="" id='work_profil'/>
       <h3 className="work_text">Software Engineer, UX/UI Designer, and IT Project Manager, I offer a unique blend of technical, creative, and strategic skills to enhance your organization.





<br/>Unique Value 💎 <br/>My multidisciplinary expertise delivers innovative, user-focused solutions that align with your business goals, streamline workflows, and drive engagement.



<br/>My Role in Your Team 🏆<br/> I integrate seamlessly, leading development, designing intuitive experiences, and driving projects to success while fostering team synergy.



<br/>Advantages of My Process 🔄<br/> My clear, agile, and user-centric approach combines robust development, empathetic design, and disciplined management to deliver projects on time and above expectations.

Partner with me to transform your ideas into impactful, user-friendly solutions.</h3>

      </div>
      
    </div>
  )
}

export default Workwith
