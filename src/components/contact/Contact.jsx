import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Titre principal - Cohérent */}
        <h2 className="section_title">Get In Touch</h2>
        
        {/* Layout 2 COLONNES comme la photo */}
        <div className="contact_container">
          {/* Colonne gauche - Texte */}
          <div className="contact_info">
            <h3 className="contact_title">Let's talk about everything!</h3>
            <p className="contact_details">
              Don't like forms? Send me an email. 
              <br />
              <a href="mailto:Kaderissagoulbi@gmail.com" className="email-link">Kaderissagoulbi@gmail.com</a> 
              <span className="emoji">👋</span>
            </p>
          </div>

          {/* Colonne droite - Formulaire */}
          <form className="contact_form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact_form-group">
              {/* Nom & Email - 2 colonnes */}
              <div className="form-row">
                <div className="contact_form-div">
                  <input 
                    type="text" 
                    className="contact_form-input" 
                    placeholder="Insert your name"
                    required
                  />
                </div>
                <div className="contact_form-div">
                  <input 
                    type="email" 
                    className="contact_form-input" 
                    placeholder="Insert your email"
                    required
                  />
                </div>
              </div>

              {/* Sujet */}
              <div className="contact_form-div">
                <input 
                  type="text" 
                  className="contact_form-input" 
                  placeholder="Insert your subject"
                  required
                />
              </div>

              {/* Message - Full width */}
              <div className="contact_form-div contact-form-area">
                <textarea 
                  className="contact_form-input" 
                  placeholder="Write your message"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>

            {/* Bouton Send - SANS EmailJS */}
            <button type="submit" className="btn_send">
              <span className="btn-text">Send Message</span>
              <span className="btn-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact