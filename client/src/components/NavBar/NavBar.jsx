
import './NavBar.css'
import logo from './logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faTicket} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <img className='logo-img' src={logo} alt="logo" />
        <nav className='navbar'>
            <ul className="navbar-list">
                <li className="navbar-items">ACCUEIL</li>
                <li className="navbar-items">A PROPOS</li>
                <li className="navbar-items" >PRESENTATION <FontAwesomeIcon icon={faChevronDown} className='cheveron' /> </li>
            </ul>
        </nav>
        <button className='ticket-btn'><FontAwesomeIcon icon={faTicket} className='ticket' /> BILLETERIE</button>
    </div>
  )
}

export default NavBar