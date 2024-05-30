
import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/IMG(1).jpeg'
import IMG2 from '../../assets/IMG(2).jpeg'
import IMG3 from '../../assets/IMG(3).jpeg'
import IMG4 from '../../assets/IMG(4).jpeg'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Mazingira',
    github: 'https://github.com/enochblake/Mazingira',
    demo: 'https://mazingira-application.onrender.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio',
    github: 'https://github.com/charitywanjiku/PORTFOLIO2',
    demo: 'https://charitywanjiku-portfolio.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PETWILL DASHBOARD',
    github: 'https://github.com/charitywanjiku/PETWILL',
    demo: 'https://petwill.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'SafiriTours',
    github: 'https://github.com/Bashu-011/SafiriTours',
    demo: 'https://safiritours-c180c6561356.herokuapp.com/hotels'
  },
  {
    id: 5,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 6,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })}
            
      </div>
    </section>
  );
}

export default Portfolio;

