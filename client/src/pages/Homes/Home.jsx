import React from 'react'
import './Home.css'
import Form from './Form'


const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
            <p className="hero-text-up">Vivez l&#39;instant, partagez l&#39;expérience, choisissez Tendance</p>
            <p className="hero-text-down">Que vous soyez un particulier cherchant à célébrer des moments spéciaux ou un professionnel désirant dynamiser votre équipe, nous sommes là pour vous offrir des événements sportifs exceptionnels, conformes aux dernières tendances.</p>
            <Form/>
      </div>
      <div className="sous-titre">
        <img src="./flag-sous-titre.png" alt="flag-sous-titre" className="flag-sous-titre" />
        <p className='sous-titre-head'>Tendances.events c&#39;est...</p>
        <p className='sous-titre-body'>Une Agence événementielle implantée à <span >monaco</span></p>
      </div>
      <div className="offre">
        <h3 className="offre-titre">Nos offres du moment</h3>
        <div className="offre-details">
          <div className="category-1">
            <img src="./category-1-pic.png" alt="player" className='cat1-player' />
            <img src="./category-1-top14.png" alt="top14" className='cat1-top14' />
            <div className="category-1-text">
              <h3 className="cat-title">FINALE TOP 14</h3>
              <p className="cat-text">Vivez le frisson du TOP 14 à Marseille avec nous ! Découvrez nos offres exclusives pour une expérience sportive inoubliable.</p>
              <button className="cat-btn">réserver dès maintenant</button>
            </div>
          </div>
          <div className="category-2">
            <img src="./category-2-pic.png" alt="player2" className='cat2-player' />
            <div className="category-1-text">
              <h3 className="cat-title">PARIS 2024</h3>
              <p className="cat-text">Découvrez l&#39;excitation pure de l&#39;événement sportif majeur de 2024 à Paris avec nos offres exclusives de revente d&#39;hospitalités.</p>
              <button className="cat-btn">réserver dès maintenant</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-text">
        <div className="text-section">
          <h3 className="section-title">Première Agence de Revente sur la <span> Côte d&#39;Azur !</span></h3>
          <p className='section-body'>Découvrez l&#39;intensité du sport avec Tendances.Events, la nouvelle agence d&#39;événementiel sportif sur Monaco. Vivez des moments d&#39;exception lors d&#39;événements majeurs comme la finale du Top 14, plongez au cœur de l&#39;émotion sportive que la France attend. Explorez une multitude de disciplines et faites de chaque événement une expérience mémorable.</p>
          <h5 className='section-footer'>Particulier ou pro, vibrez avec nos offres exclusives</h5>
          <button className='section-btn'><span><img src="../../../public/Frame.png" alt="ticket-frame" className='ticket' /></span>Accéder à la billeterie</button>
        </div>
        <img src="./french-flag.png" alt="" className="french-flag" />
      </div>

    </div>
        
    
  )
}

export default Home