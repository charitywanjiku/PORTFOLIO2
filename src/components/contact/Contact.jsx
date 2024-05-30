import React from 'react';
import './contact.css';
import { BiMailSend, BiLogoWhatsapp } from 'react-icons/bi';
import ContactOption from './ContactOption';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lt79jjl", "template_30nx9p6", form.current, "w8UqcSgwJ1e9jr23f")
      .then((result) => {
        window.alert("Message Sent! Thank you for contacting me. I'll reply as soon as possible.");
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const mailtoRef = useRef('mailto:charitywanjiku422@gmail.com');
  const whatsappRef = useRef('https://api.whatsapp.com/send?phone=+254751679173');

  return (
    <section id='contact'>
      <h5>If you want to get in touch with me, here are some of my</h5>
      <h2>Contact Details</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption icon={<BiMailSend className='contact__option-icon'/>} title="Email" content="charitywanjiku422@gmail.com" link={mailtoRef}/>
          <ContactOption icon={<BiLogoWhatsapp className='contact__option-icon'/>} title="WhatsApp" content="+254751679173" link={whatsappRef}/>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <h4>Send a Direct Message</h4>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send direct message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
