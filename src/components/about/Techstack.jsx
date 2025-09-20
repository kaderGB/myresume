
import IMG1 from "../../assets/javascript-logo-svgrepo-com.png"
import IMG2 from "../../assets/html-5.png"
import IMG3 from "../../assets/css-3.png"
import IMG4 from "../../assets/science.png"
import IMG5 from "../../assets/tailwind-svgrepo-com.png"
import IMG6 from "../../assets/redux-svgrepo-com.png"
import IMG7 from "../../assets/typescript-svgrepo-com.png"
import IMG8 from "../../assets/mongo-svgrepo-com.png"
import IMG9 from "../../assets/node-js-svgrepo-com.png"
import IMG10 from "../../assets/express-svgrepo-com.png"
import IMG11 from "../../assets/git-svgrepo-com.png"
import IMG12 from "../../assets/bootstrap-svgrepo-com.png"
import IMG13 from "../../assets/npm-svgrepo-com.png"
import IMG14 from "../../assets/figma-svgrepo-com.png"
import IMG15 from "../../assets/adobe-xd-svgrepo-com.png"
import IMG16 from "../../assets/sketch-svgrepo-com.png"
import IMG17 from "../../assets/behance-color-svgrepo-com.png"
import IMG18 from "../../assets/dribbble-color-svgrepo-com.png"
import IMG19 from "../../assets/miro-svgrepo-com.png"
import IMG20 from "../../assets/notion-svgrepo-com.png"
import IMG21 from "../../assets/Midjourney_Emblem.svg"
import IMG22 from "../../assets/icon.png"
import IMG23 from "../../assets/jira-svgrepo-com.png"
import IMG24 from "../../assets/confluence-svgrepo-com.png"
import IMG25 from "../../assets/microsoft-office-365-cloud-red-icon-701751695038064sbisks9rco-removebg-preview.png"
import IMG26 from "../../assets/bitbucket-svgrepo-com.png"
import IMG27 from "../../assets/slack-svgrepo-com.png"
import IMG28 from "../../assets/trello-color-svgrepo-com.png"
import IMG29 from "../../assets/github-color-svgrepo-com 2.png"
import IMG30 from "../../assets/microsoft-Project-e1601672844773.png"
import IMG31 from "../../assets/logo.png"
import IMG32 from "../../assets/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg"
import IMG33 from "../../assets/grok-logo-VY08DVbD-removebg-preview.png"
import IMG34 from "../../assets/google-gemini-fjwerd7ldxwt4c010vyoh.webp"
import IMG35 from "../../assets/Google-Bard-1.png"
import IMG36 from "../../assets/SEOPTIMER-3.png"
import IMG37 from "../../assets/Microsoft_Copilot_Icon.svg.png"


import React, { useEffect, useState } from 'react'
import './techstack.css'

const Techstack = () => {
  // État pour animations au scroll
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('techstack')
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(isInViewport)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Données des technologies organisées
  const techCategories = [
    {
      category: 'Frontend',
      icons: [
        { src: IMG2, alt: 'HTML5' },
        { src: IMG3, alt: 'CSS3' },
        { src: IMG1, alt: 'JavaScript' },
        { src: IMG5, alt: 'Tailwind CSS' },
        { src: IMG7, alt: 'TypeScript' },
        { src: IMG12, alt: 'Bootstrap' }
      ]
    },
    {
      category: 'State & Framework',
      icons: [
        { src: IMG6, alt: 'Redux' },
        { src: IMG4, alt: 'React' },
        { src: IMG13, alt: 'NPM' }
      ]
    },
    {
      category: 'Backend',
      icons: [
        { src: IMG9, alt: 'Node.js' },
        { src: IMG10, alt: 'Express' },
        { src: IMG8, alt: 'MongoDB' },
        { src: IMG11, alt: 'Git' }
      ]
    },
    {
      category: 'Design Tools',
      icons: [
        { src: IMG14, alt: 'Figma' },
        { src: IMG15, alt: 'Adobe XD' },
        { src: IMG16, alt: 'Sketch' },
        { src: IMG17, alt: 'Behance' },
        { src: IMG18, alt: 'Dribbble' },
        { src: IMG19, alt: 'Miro' },
        { src: IMG20, alt: 'Notion' }
      ]
    },
    {
      category: 'Project Management',
      icons: [
        { src: IMG23, alt: 'Jira' },
        { src: IMG24, alt: 'Confluence' },
        { src: IMG30, alt: 'MS Project' },
        { src: IMG26, alt: 'Bitbucket' },
        { src: IMG27, alt: 'Slack' },
        { src: IMG28, alt: 'Trello' },
        { src: IMG29, alt: 'GitHub' },
        { src: IMG25, alt: 'MS Office 365' }
      ]
    },
    {
      category: 'AI & Tools',
      icons: [
        { src: IMG32, alt: 'ChatGPT' },
        { src: IMG33, alt: 'Grok' },
        { src: IMG34, alt: 'Google Gemini' },
        { src: IMG35, alt: 'Google Bard' },
        { src: IMG36, alt: 'SEOPTIMER' },
        { src: IMG37, alt: 'Microsoft Copilot' },
        { src: IMG22, alt: 'Custom Tool' },
        { src: IMG21, alt: 'Midjourney' }
      ]
    }
  ]

  return (
    <div className={`techstack ${isVisible ? 'visible' : ''}`} id="techstack">
      <div className='space'></div>
      
      {/* Titre simplifié */}
      <div className="title-container">
        <h1 className='tech_title'>Tech Stack</h1>
        <p className="tech-subtitle">
          Technologies I work with to build amazing digital experiences
        </p>
      </div>

      {/* Technologies organisées par catégories - FLEX LAYOUT */}
      <div id='tech_list'>
        {techCategories.map((category, index) => (
          <div key={index} className={`tech_list category-${index}`}>
            {/* Label de catégorie */}
            <div className="category-label">
              <span>{category.category}</span>
            </div>
            
            {/* Icônes en FLEX */}
            <div className="icons-container">
              {category.icons.map((icon, iconIndex) => (
                <div 
                  key={iconIndex} 
                  className="icon-wrapper"
                  role="img"
                  aria-label={icon.alt}
                  tabIndex={0}
                >
                  <img 
                    src={icon.src} 
                    alt={icon.alt}
                    className='tech_icon' 
                    loading="lazy"
                  />
                  <div className="icon-overlay">
                    <span>{icon.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SUPPRIMÉ : Plus de footer "Ready to..." */}
    </div>
  )
}

export default Techstack