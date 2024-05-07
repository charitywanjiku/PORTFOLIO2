// import React, { useState, useEffect } from 'react';
// import './nav.css'
// import { BiHomeAlt2 } from 'react-icons/bi';
// import { SiAboutdotme } from 'react-icons/si';
// import { MdWorkOutline } from 'react-icons/md';
// import { PiBooksLight } from 'react-icons/pi';
// import { AiOutlineMessage } from 'react-icons/ai';
// import { BsFillDoorOpenFill } from 'react-icons/bs';

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#');

//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector('header');
//       const footer = document.querySelector('footer');
//       const sections = document.querySelectorAll('section');
//       const scrollPosition = window.scrollY || document.documentElement.scrollTop;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i];
//         const sectionId = `#${section.id}`;
//         const sectionOffsetTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (
//           scrollPosition >= sectionOffsetTop - windowHeight * 0.7 &&
//           (scrollPosition < sectionOffsetTop + sectionHeight ||
//             scrollPosition >= documentHeight - windowHeight - footer.offsetHeight)
//         ) {
//           setActiveNav(sectionId);
//           break;
//         }
//       }

//       if (
//         scrollPosition >= documentHeight - windowHeight - footer.offsetHeight &&
//         scrollPosition <= documentHeight - windowHeight
//       ) {
//         setActiveNav('#footer');
//       }

//       if (scrollPosition < header.offsetHeight - 300) {
//         setActiveNav('#');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { id: '#', icon: <BiHomeAlt2 /> },
//     { id: '#about', icon: <SiAboutdotme /> },
//     { id: '#experience', icon: <PiBooksLight /> },
//     { id: '#portfolio', icon: <MdWorkOutline /> },
//     { id: '#contact', icon: <AiOutlineMessage /> },
//     { id: '#footer', icon: <BsFillDoorOpenFill /> }
//   ];

//   return (
//     <nav>
//       {navItems.map(item => (
//         <a
//           key={item.id}
//           href={item.id}
//           onClick={() => setActiveNav(item.id)}
//           className={activeNav === item.id ? 'active' : ''}
//         >
//           {item.icon}
//         </a>
//       ))}
//     </nav>
//   );
// };

// export default Nav;
import React, { useState, useEffect } from 'react';
import './nav.css'
import { BiHomeAlt2 } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { MdWorkOutline } from 'react-icons/md';
import { PiBooksLight } from 'react-icons/pi';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsFillDoorOpenFill } from 'react-icons/bs';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (!header || !footer || !sections.length) {
        // Return early if any of the required elements are not found
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionId = `#${section.id}`;
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionOffsetTop - windowHeight * 0.7 &&
          (scrollPosition < sectionOffsetTop + sectionHeight ||
            scrollPosition >= documentHeight - windowHeight - footer.offsetHeight)
        ) {
          setActiveNav(sectionId);
          break;
        }
      }

      if (
        scrollPosition >= documentHeight - windowHeight - footer.offsetHeight &&
        scrollPosition <= documentHeight - windowHeight
      ) {
        setActiveNav('#footer');
      }

      if (scrollPosition < header.offsetHeight - 300) {
        setActiveNav('#');
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100); // Throttle scroll event

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  const navItems = [
    { id: '#', icon: <BiHomeAlt2 /> },
    { id: '#about', icon: <SiAboutdotme /> },
    { id: '#experience', icon: <PiBooksLight /> },
    { id: '#portfolio', icon: <MdWorkOutline /> },
    { id: '#contact', icon: <AiOutlineMessage /> },
    { id: '#footer', icon: <BsFillDoorOpenFill /> }
  ];

  return (
    <nav>
      {navItems.map(item => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => setActiveNav(item.id)}
          className={activeNav === item.id ? 'active' : ''}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

// Throttle function to limit the execution of a function to once every specified number of milliseconds
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default Nav;

