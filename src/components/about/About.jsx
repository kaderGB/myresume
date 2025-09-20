import React from 'react'
import "./about.css"
import Me from '../../assets/modelpic.png'

import Techstack from '../about/Techstack'

const About = () => {
  return (
    <section className='about container section' id="about"  data-aos="zoom-in" data-aos-duration="3000">
     <section class="about-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">About Me</h2>
    </div>
    
    <div class="about-content">
      <div class="about-text">
        <p class="intro-text">
          Hello! I'm Kader, a passionate software engineer, UX/UI designer, and IT project manager with over 8 years of experience blending code, creativity, and strategy to build impactful digital solutions.
        </p>
        
        <p class="journey-text">
          My journey started in the trenches of coding, where I fell in love with turning complex problems into elegant, scalable software. Along the way, I discovered the magic of user-centered design—crafting intuitive interfaces that make technology feel effortless and human. Now, as a project manager, I orchestrate teams to deliver projects on time, under budget, and with a focus on real-world results.
        </p>
        
        <p class="process-text">
          <strong>What drives me?</strong> Empathy and efficiency. I emphasize understanding users deeply—whether through wireframes, prototypes, or data-driven insights—to create products that not only work but delight.
        </p>
        
        <p class="approach-text">
          My process is collaborative and iterative: I start with discovery—listening to stakeholders and users—then dive into design and development, testing rigorously, and refining based on feedback. This holistic approach adds value by bridging gaps between tech, design, and business, helping companies innovate faster, reduce risks, and boost user engagement.
        </p>
        
        <p class="team-text">
          I thrive in dynamic teams, bringing positive energy that fosters creativity and problem-solving. If you're building something meaningful, let's connect—I'm excited to bring my unique mix of skills to your next project and turn ideas into reality.
        </p>
      </div>
      
      <div class="stats-container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-icon">✨</div>
            <div class="stat-number">18</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon">☕</div>
            <div class="stat-number">1432</div>
            <div class="stat-label">Cup of Coffee</div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon">👥</div>
            <div class="stat-number">56</div>
            <div class="stat-label">Satisfied Clients</div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon">⭐</div>
            <div class="stat-number">6</div>
            <div class="stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      <Techstack/>
    </section>
  )
}

export default About
