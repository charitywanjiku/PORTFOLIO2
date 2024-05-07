import React from 'react'
import './experience.css'
import ExperienceDetail from './ExperienceDetail'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>If you are enthusiastic about me,here are..</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Frontend Development</h3>

          <div className="experience__content">
            
            
            
            <ExperienceDetail title="React Native" content="Experienced"/>
            
            <ExperienceDetail title="React" content="Experienced"/>
            <ExperienceDetail title="Tailwind" content="Experienced"/>
            <ExperienceDetail title="Bootstrap" content="Experienced"/>
          </div>

        </div>


        <div className="experience__languages">
          <h3>Languages</h3>
          <div className="experience__content">
         
          
         
          <ExperienceDetail title="Javascript" content="Experienced"/>
          <ExperienceDetail title="C/C++" content="Experienced"/>
          <ExperienceDetail title="HTML5" content="Experienced"/>
          <ExperienceDetail title="XML" content="Experienced"/>
          <ExperienceDetail title="CSS" content="Experienced"/>
          <ExperienceDetail title="R" content="Experienced"/>
          
          <ExperienceDetail title="SQL" content="Experienced"/>

          </div>
          
        </div>


        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            
            
            <ExperienceDetail title="MYSQL" content="Experienced"/>
            <ExperienceDetail title="Python" content="Experienced"/>
            <ExperienceDetail title="Flask" content="Intermediary"/>
            
            <ExperienceDetail title="RESTFul API" content="Experienced"/>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Experience