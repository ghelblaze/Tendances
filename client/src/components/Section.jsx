import React from 'react'
import BilleterieBTN from './billeterieBTN'

const Section = () => {
  return (
    
        <div className='section8'>
            <div className="section8left">
                <h3 className="section8title">Créons Ensemble des Événements Mémorables</h3>
                <p className="section8text">Explorez avec Tendances.Events, l&#39;agence événementielle basée à Monaco dédiée à l	&#39;art de créer des événements sportifs inoubliables. Immergez-vous dans une aventure unique où notre équipe passionnée vous accompagne de la genèse de l	&#39;idée à la réalisation. Du scénario initial à la concrétisation, nous sommes là pour donner vie à vos concepts, transformant chaque détail en une expérience immersive. Avec Tendances.Events, chaque événement devient une toile vierge sur laquelle se dessine une expérience, marquée par notre engagement et notre créativité débordante.</p>
                <BilleterieBTN text="EN SAVOIR PLUS" styles="section8btn" logo="false"/>
            </div>
            <div className="section8right">
                <img src="../../public/tree.png" alt="tree" className="section8tree" />
            </div>
            <img src="../../public/hassen.png" alt="" className="backetBallman" />

        </div>
    
    
  )
}

export default Section