import React from 'react'
import './header.css'
import CTA from './CTA'
//  import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials';
import {BsArrowDownCircle} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Charity Wanjiku</h1>
        <h5 className="text_light"> FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
            {/* <img src={ME} alt="Eu" /> */}
        </div>

        <a href="#footer" className='scroll__down'><BsArrowDownCircle/></a>
      </div>
    </header>
  )
}

export default Header