import React from 'react'
import "./services.css"
import Workwith from './Workwith'

// FontAwesome → React-Icons
import { 
  FaCode, 
  FaPalette, 
  FaProjectDiagram, 
  FaChartLine, 
  FaUsers, 
  FaHandsHelping 
} from 'react-icons/fa' // ✅ React-Icons

const Services = () => {
  const servicesData = [
    { icon: <FaCode className="service-icon" />, title: 'Software Development', subtitle: 'Building Your Vision, Line by Line' },
    { icon: <FaPalette className="service-icon" />, title: 'UX/UI Design', subtitle: 'Designing Intuitive, User-Centric Experiences' },
    { icon: <FaProjectDiagram className="service-icon" />, title: 'IT Project Management', subtitle: 'Leading Projects to Success' },
    { icon: <FaChartLine className="service-icon" />, title: 'Agile Coaching', subtitle: 'Empowering Agile Transformation' },
    { icon: <FaUsers className="service-icon" />, title: 'Agile Facilitation', subtitle: 'Fostering Collaborative Agile Practices' },
    { icon: <FaHandsHelping className="service-icon" />, title: 'Social Volunteering', subtitle: 'Driving Community Impact' }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section_title">Services</h2>
        <h3 className="section_title1">
          Transforming visions into reality through technology, design, and Agile expertise.
        </h3>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="card_service" tabIndex={0}>
              <div className="card_header">
                {service.icon}
              </div>
              <div className="card_body">
                <h1 className="card_h1">{service.title}</h1>
                <h2 className="card_h3">{service.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
        
        <Workwith />
      </div>
    </section>
  )
}

export default Services