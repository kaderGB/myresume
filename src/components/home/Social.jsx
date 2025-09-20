import React from 'react'
// Import FontAwesome correctement
import { 
  FaLinkedinIn, 
  FaTwitter, // ✅ FaTwitter au lieu de FaXTwitter
  FaGithub, 
  FaBehance, 
  FaWhatsapp, 
  FaEnvelope 
} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='home_social'>
      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/kadergb" 
        className="home_social_link" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      
      {/* Twitter - Corrigé */}
      <a 
        href="https://twitter.com/votre-twitter" 
        className="home_social_link" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/kaderGB" 
        className="home_social_link" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      {/* Behance */}
      <a 
        href="https://www.behance.net/kaderissagoulbi" 
        className="home_social_link" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Behance"
      >
        <FaBehance />
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/votre-numero" 
        className="home_social_link" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      
      {/* Gmail */}
      <a 
        href="mailto:Kaderissagoulbi@gmail.com" 
        className="home_social_link" 
        aria-label="Email Kaderissagoulbi@gmail.com"
      >
        <FaEnvelope />
      </a>
    </div>
  )
}

export default Social