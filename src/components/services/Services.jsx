import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id = "services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>
      <div className="container services_container">
      <article className="service">
      <div className="service_head">
        <h3>WEB DEVELOPMENT</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Website Development and Optimization</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Web Application Development</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Responsive Web Design</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Website Maintenance and Support</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Custom Website Design/UI/UX Design</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Website Hosting and Deployment</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Website Analytics and Reporting</p>
          </li>
          
          </ul>
          </article>
          {/* </div> */}
        
      {/* <div className="container services_container"> */}
      <article className="service">
          <div className="service_head">
        <h3>STATISTICAL ANALYSIS</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Designing Experiments and Surveys.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Data Collection and Management</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Quality Control and Assurance</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Interpretation and Reporting</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Modeling and Prediction</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Consultation and Collaboration</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Data Analysis</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Research</p>
          </li>
          </ul>
          </article>
          {/* </div> */}
          {/* <div className="container services_container"> */}
      <article className="service">  
          <div className="service_head">
        <h3>AI AUGMENTED DEVELOPMENT</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>AI Consulting</p>
          </li><li>
            <BiCheck className="service_list-icon"/>
            <p>AI Model Development</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>AI Project Management</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>AI Research and Develoment</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>AI Strategy and Roadmap Development</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>AI Training and Education</p>
          </li>
          </ul>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Data Analysis and Insights</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>AI Ethics and Governance</p>
          </li>  
          </article> 
          {/* </div>  */}
</div>
    </section>
  )
}

export default Services