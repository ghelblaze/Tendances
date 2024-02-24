import './footer.css'
import logo from '../../../public/Group.png'
import tendances from '../../../public/tendances.png'
import events from '../../../public/events.png'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className='flag'>
         <img src="./flag.png" alt="flag" className='footer-flag' />
        </div>
        <div className="logo-footer">
          <img className='logo-img' src={logo} alt="logo" />
          <img className='tendances-img' src={tendances} alt="tendances" />
          <img className='events-img' src={events} alt="events" />
       </div>
        <ul className="footer-links">
            <li className="footer-links-items">ACCUEIL</li>
            <li className="footer-links-items">A PROPOS</li>
            <li className="footer-links-items">PROFESSIONNELS</li>
            <li className="footer-links-items">PARTICULIERS</li>
            <li className="footer-links-items">CLIENTS</li>
            <li className="footer-links-items">BILLETERIE</li>
        </ul>
        <img src="../../../public/logo-footer.png" alt="logo-footer" className="footer-logo-2" />
        <ul className="footer-products">
            <li className="footer-products-links"><img src="../../../public/sport.png" alt="sport" /></li>
            <li className="footer-products-links"><img src="../../../public/media.png" alt="media" /></li>
            <li className="footer-products-links"><img src="../../../public/dev.png" alt="dev" /></li>
            <li className="footer-products-links"><img src="../../../public/one.png" alt="one" /></li>
            <li className="footer-products-links"><img src="../../../public/top.png" alt="top" /></li>
            <li className="footer-products-links"><img src="../../../public/agilix.png" alt="agilix" /></li>
            <li className="footer-products-links"><img src="../../../public/tevents.png" alt="events" /></li>
        </ul>
        <div className="footer-bottom">
            <p className='copyRight'>COPYRIGHT 2023 &copy; TENDANCES.EVENTS</p>
            <p className='creator'>CREE AVEC PASSION <span className="monaco-flag"><img src="../../../public/flag_monaco.png" alt="flag-monaco" /></span> PAR TENDANCES.DEV</p>
            <p className='legal'><span className='footerSpan' >Politique de confidentialité</span><span className='footerSpan'>Mentions légales</span></p>
        </div>
    </div>
    </>
    
  )
}

export default Footer