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


    </div>
        
    
  )
}

export default Home