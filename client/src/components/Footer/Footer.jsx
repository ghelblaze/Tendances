import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className='flag'>
         <img src="./flag.png" alt="flag" className='footer-flag' />
        </div>
        <img src="./logo.png" alt="logo-1" className='footer-logo-1' />
        <ul className="footer-links">
            <li className="footer-links-items">ACCUEIL</li>
            <li className="footer-links-items">A PROPOS</li>
            <li className="footer-links-items">PRESTATIONS POUR LES PROFESSIONNELS</li>
            <li className="footer-links-items">PRESTATIONS POUR LES PARTICULIERS</li>
            <li className="footer-links-items">CLIENTS</li>
            <li className="footer-links-items">BILLETERIE</li>
        </ul>
        <img src="./logo.png" alt="logo-2" className="footer-logo-2" />
        <ul className="footer-products">
            <li className="footer-products-links"><img src="./logo.png" alt="sport" /></li>
            <li className="footer-products-links"><img src="./logo.png" alt="media" /></li>
            <li className="footer-products-links"><img src="./logo.png" alt="dev" /></li>
            <li className="footer-products-links"><img src="./logo.png" alt="one" /></li>
            <li className="footer-products-links"><img src="./logo.png" alt="top" /></li>
            <li className="footer-products-links"><img src="./logo.png" alt="agilix" /></li>
            <li className="footer-products-links"><img src="./logo.png" alt="events" /></li>
        </ul>
    </div>
        <div className="footer-bottom">
            <p className='copyRight'>COPYRIGHT 2023 &copy; TENDANCES.EVENTS</p>
            <p className='creator'>CREE AVEC PASSION  PAR TENDANCES.DEV</p>
            <p className='legal'><span >Politique de confidentialité</span><span>Mentions légales</span></p>
        </div>
    </>
    
  )
}

export default Footer