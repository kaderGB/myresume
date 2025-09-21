import React from 'react'
import "./home.css"
import Me from '../../assets/modelpic.png'
import Social from './Social'
import Scrolldown from './Scrolldown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <div id="main_home">
      <section className='home container' id="home">
        <div className="intro">
          {/* Image de profil */}
          <img src={Me} alt="Kader Issa Goulbi" className="home_img" />
        
          {/* Nom */}
          <h1 className="home_name">KADER ISSA GOULBI</h1>
          
          {/* Text changer */}
          <div className="text-changer">
           
            <div className="roles-container">
              <span className="role">Software Engineer</span>
              <span className="role">UxUi Designer</span>
              <span className="role">IT Project Manager</span>
            </div>
          </div>
          
          {/* Available Card */}
          <div className="available-card">
            <div className="card-content">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className='span-online'>Available</span>
              </div>
              <h3>Open to Work</h3>
              <p>Seeking new opportunities in UX/UI Design, IT Project Management, and Software Engineering</p>
            </div>
          </div>

          {/* Social Icons */}
          <Social />
          
          {/* Bouton Resume - COHÉRENT */}
          <a href="../../resumecv.pdf" download="../../resumecv.pdf" className="resume-link">
            <button className="btn_resume">
              <span className="btn-text">Resume</span>
              <i className="fas fa-download btn-icon"></i>
            </button>
          </a>
          
          {/* Scroll Down */}
          <Scrolldown />
        </div>
        <Shapes />
      </section>
    </div>
  )
}

export default Home