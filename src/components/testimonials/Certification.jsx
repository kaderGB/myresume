import React from 'react'
import Google from '../../assets/transparent-google-logo-flat-google-logo-with-blue-green-red-1710875585155-removebg-preview.png'
import Scrum from '../../assets/c4952760846d829789cae89490d469935d871846-removebg-preview.png'
import Meta from '../../assets/Meta-Logo-removebg-preview.png' 

const Certification = () => {
  return (
    <section className='certification container section' id="certification">
        <h2 className="section_title">Certifications</h2>
        <div className="certi_items">
          <div className="certi1">
        <div id='certi_list'>
            <img src={Google} alt="" id='metal_img1'/>
            <h1 className='certi_h1' id='certi_h1' >Certification Google Agile Project Management</h1>
        </div>


          <div id='certi_list'>
            <div id='certi'>
            <img src={Scrum} alt="" id='metal_img2'/>
            </div>
            <h1 className='certi_h1' id="cert_h1">Scrum master Certification</h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Meta} alt="" id='metal_img3'/>
            <h1 className='certi_h1' id="cert_h1" >Certification Meta Principles of UX/UI Design</h1>
        </div>
</div>
 <div className="certi2">

          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Meta} alt="" id='metal_img3'/>
            <h1 className='certi_h1' id="cert_h1">Certification Meta Version Control </h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Meta} alt="" id='metal_img3'/>
            <h1 className='certi_h1' id="cert_h1">Certification Meta React Basics</h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Meta} alt="" id='metal_img3'/>
            <h1 className='certi_h1' id="cert_h1">Certification Meta Programming javascript</h1>
        </div>
</div>
        </div>
        </section>
  )
}

export default Certification
