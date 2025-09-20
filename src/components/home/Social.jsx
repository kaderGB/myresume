import React from 'react'
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaGithub, 
  FaBehance, 
  FaWhatsapp, 
  FaEnvelope 
} from 'react-icons/fa' // ✅ React-Icons

const Social = () => {
  return (
    <div className='home_social'>
      <a href="https://www.linkedin.com/in/kadergb" className="home_social_link" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      
      <a href="https://twitter.com/votre-twitter" className="home_social_link" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>

      <a href="https://github.com/kaderGB" className="home_social_link" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>

      <a href="https://www.behance.net/kaderissagoulbi" className="home_social_link" target="_blank" rel="noopener noreferrer">
        <FaBehance />
      </a>

      <a href="https://wa.me/votre-numero" className="home_social_link" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      
      <a href="mailto:Kaderissagoulbi@gmail.com" className="home_social_link">
        <FaEnvelope />
      </a>
    </div>
  )
}

export default Social