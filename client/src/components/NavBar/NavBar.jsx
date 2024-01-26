
import './NavBar.css'
import logo from '../../../public/Group.png'
import tendances from '../../../public/tendances.png'
import events from '../../../public/events.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (
    <div className='navbar-container'>
       <div className="logo">
          <img className='logo-img' src={logo} alt="logo" />
          <img className='tendances-img' src={tendances} alt="tendances" />
          <img className='events-img' src={events} alt="events" />
       </div>
        
        <nav className='navbar'>
            <ul className="navbar-list">
                <li className="navbar-items">ACCUEIL</li>
                <li className="navbar-items">A PROPOS</li>
                <li className="navbar-items" >PRESENTATION <FontAwesomeIcon icon={faChevronDown} className='cheveron' /> </li>
            </ul>
        </nav>
        <button className='ticket-btn'><img src="../../../public/Frame.png" alt="ticket-frame" className='ticket'/> BILLETERIE</button>
    </div>
  )
}

export default NavBar