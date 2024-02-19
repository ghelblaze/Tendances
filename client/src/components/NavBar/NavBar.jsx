import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../../public/Group.png'
import tendances from '../../../public/tendances.png'
import events from '../../../public/events.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import BilleterieBTN from '../billeterieBTN'
import { useState } from 'react'


const NavBar = () => {
  const [btnToggle,setBtnToggle]=useState(false)
  const toggleMenu=()=>{
    setBtnToggle(!btnToggle)
    console.log(btnToggle)
  }
  return (
    <div className='navbar-container'>
       <div className="logo">
          <img className='logo-img' src={logo} alt="logo" />
          <img className='tendances-img' src={tendances} alt="tendances" />
          <img className='events-img' src={events} alt="events" />
       </div>
        
        <nav className='navbar'>
            <ul className="navbar-list">
                <Link to="/" className="navbar-items">ACCUEIL</Link>
                <Link to="/propos" className="navbar-items">A PROPOS</Link >
                <Link  className="navbar-items prestation-btn" onClick={()=>toggleMenu()}>PRESENTATION <FontAwesomeIcon icon={faChevronDown} className='cheveron' /> </Link>
            </ul>
            <ul className={btnToggle? "prestation": "prestation hide"}>
                    <Link to='#' className='prestation-menu'>Professionel</Link>
                    <Link to='#' className='prestation-menu'>Particulier</Link>
            </ul>
        </nav>
        <BilleterieBTN text={'BILLETERIE'} styles={"ticket-btn"}/>
         
    </div>
  )
}

export default NavBar