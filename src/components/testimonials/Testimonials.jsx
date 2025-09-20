import React, { useEffect } from 'react'
import "./testimonials.css"
import Image from "../../assets/img/6814e4ea33d8e47f3e32d1e4_Aaron_Ogunro_5089.jpg"
import Image3 from "../../assets/img/istockphoto-1325565779-612x612.jpg"
import Image2 from "../../assets/img/200f2-ottawa-headshot-photographer-Olaide-Website.webp"
import Image4 from "../../assets/img/1_Jh2AAF0PelhQ3Xxq6eUbaw@2x.jpg"
import Image5 from "../../assets/img/chilled-young-black-male-model-in-studio-portrait-free-image.webp"
import Image6 from "../../assets/img/93650d9a-6c6b-4851-a0fb-8710b068b769_rw_600.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import Certification from './Certification'

import Aos from 'aos'
import 'aos/dist/aos.css'








const data = [
  {
    id: 1,
    image: Image,
    title: "Alex Dupont",
    subtitle: "Technical Director, Tech Startup",
    comment:
      "As a UX/UI Designer, Kader issa transformed our interfaces into seamless, intuitive experiences. His eye for detail boosted our retention rate by 30%. A true asset to any agile team!"
  },
  {
    id: 2,
    image: Image3,
    title: "Marie Lefèvre",
    subtitle: "Product Owner",
    comment:
      "He led our mobile app redesign with surgical precision, hitting every deadline without compromising quality. An exceptional manager!"


   }, 
    { 
    id: 3,
    image: Image2,
    title: "Thomas Martin",
    subtitle: "CEO, Fintech",
    comment:
      "Kader is a cornerstone as an IT Project Manager. He coordinated a critical software rollout flawlessly, anticipating risks and aligning all stakeholders."
},
  {
    id: 4,
    image: Image4,
    title: "Li Wei",
    subtitle: "Lead Developer",
    comment:
      "His UX/UI insights ensured a smooth fusion of frontend and backend in our mobile health app. A top pick for global teams. "
  },
  {
    id: 5,
    image: Image5,
    title: "Julien Roux",
    subtitle: "CTO, Software Publisher",
    comment:
      "As a Software Engineer, KaderGB codes with rare elegance, blending solid engineering with UX principles for robust products. His Project Manager role also saved our critical sprint. A versatile pro!"
     },
  { 
    id: 6,
    image: Image6,
    title: "Sophie Bertrand",
    subtitle: "UX Researcher",
    comment:
      "His UX/UI Design talent is remarkable – he creates wireframes that anticipate user needs before they're even voiced. Working with Kader makes every project more innovative and user-centric."
  },
];





const Testimonials = () => {
   useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='testi' id="testi" data-aos="fade-left">
      <section className='testimonials container section'>
        <h2 className="section_title">Clients & Reviews</h2>
        <Swiper className="testimonials_container grid"  
        modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      grabCursor={true}
        >
          {data.map(({id, image, title,subtitle, comment })=>{
              return(
                <SwiperSlide className="testimonial_item" key={id}>
                  <div className="thumb">
                    <img src={image} alt=""  className='testi_img'/>
                  </div>
                  <h3 className="testimonials_title">{title}</h3>
                  <span className="subtitle">{subtitle}</span>
                  <div className="comment">{comment}</div>
                </SwiperSlide>
              )
          })}
        </Swiper>
      </section>
      <Certification/>
    </div>
  )
}

export default Testimonials
