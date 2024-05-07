import React from 'react'
import './about.css'
// import ME from '../../assets/mejpeg'


import { aboutCardData, aboutTextData } from '../../data/aboutData'

const About = () => {
  return (
    <section id='about'>
      <h5>Find out a little more</h5>
      <h2>About Me!</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            {/* <img src={ME} alt="About me image" /> */}
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            {
              aboutCardData.map((card) => (
                <article key={card.id} className="about__card">
                  {card.icon}
                  <h5>{card.title}</h5>
                  <small>{card.small}</small>
                </article>
              ))
            }

            </div>

            {
              aboutTextData.map(paragraph => (
                <p key={paragraph.id}>
                  {paragraph.text}
                </p>
              ))
            }

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          
        </div>
      </div>
    </section>
  )
}

export default About