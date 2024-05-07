

import React from 'react';

const ContactOption = ({ icon, title, content, link }) => {
  return (
    <article className='contact__option'>
      {icon}
      <h4>{title}</h4>
      <h5>{content}</h5>
      <a target='_blank' rel='noreferrer' className='btn' href={link.current}>Send message</a>
    </article>
  );
};

export default ContactOption;
