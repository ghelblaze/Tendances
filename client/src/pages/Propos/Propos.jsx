import React from 'react'
import './propos.css'
import Paragraph from '../../components/Paragraph'
import data from './equipeData'
const Propos = () => {
  return (
    <div>
      <div className="propos-header">
        <h1 className="propos-titre">NOTRE AGENCE</h1>
        <p className="propos-sous-titre">Nouvelle agence événementielle implantée à Monaco <img src="../../../public/flag_monaco.png" alt="monaco" className="monaco-flag" /></p>
      </div>
      <Paragraph styles="paragraph-btn" logo='false'  url="../../../public/aPropoSection2.png" title="Nouvelle ère de l' " spanText="événementiel Sportif" text="Tendances.Events, une toute nouvelle agence événementielle implantée à Monaco, insuffle fraîcheur et originalité à la scène événementielle de la Principauté. En tirant parti d’une équipe solide dans le domaine sportif, notre agence s’engage à insuffler à vos événements la rigueur, la discipline et l’inspiration inhérentes au monde du sport. À sa tête, un ancien athlète de haut niveau guide une équipe spécialisée dans ce secteur, assurant ainsi que nos propositions reposent sur une véritable compréhension du domaine avant d’être présentées à votre considération." btnText=""/>
      <Paragraph styles="paragraph-btn" logo='false'  url="../../../public/aPropoSection3.png" title="EXPERTISE & " spanText="ORIGINALITé" text="Notre équipe a adopté une devise qui guide chacune de nos interventions : nous ne proposons que ce sur quoi nous sommes experts. Forts d’une connaissance approfondie des besoins spécifiques et du marché monégasque, nous nous engageons à injecter de l’originalité dans chaque événement. Notre objectif est de créer des moments uniques, rompant avec la monotonie des team buildings prévisibles où chaque année se ressemble." btnText="" reverse="1"/>
      <div className="equipe">
          <h3 className="equipe-titre">notre équipe</h3>
          <div className="equipe-membres">
            {
              data.map((membre,idx)=>{
                return(
                    <div className='membre-div' key={idx}>
                        <div className="membre-img">
                            <img src={membre.url} alt="image-membre" />
                        </div>
                        <div className="membre-data">
                          <h5 className="membre-name">
                            {membre.name}
                          </h5>
                          <div className="membre-bio">
                            {membre.bio}
                          </div>
                        </div>
                    </div>
                )
            })
            }
          </div>
      </div>
      <Paragraph styles="paragraph-btn" logo='false'  url="../../../public/aPropoSection5.png" title="créateur d’experiénces" spanText="" text="Chez nous, l’humain est au coeur de tout. Nous mettons un point d’honneur à écouter attentivement, à personnaliser nos services, faisant de l’écoute active notre principal atout. Comprendre vos besoins et apprendre de vos défis est essentiel pour nous adapter à vous, car chez notre agence, c’est vous qui guidez le processus, pas l’inverse.Chez Tendances.events, nous ne sommes pas simplement des organisateurs d’événements, nous sommes des créateurs d’expériences. Notre passion est de briser les conventions, d’insuffler une énergie nouvelle dans le monde des affaires en intégrant le dynamisme du sport à chaque aspect de votre entreprise." btnText=""/>
      <Paragraph styles="paragraph-btn" logo='false'  url="../../../public/aPropoSection6.png" title="LE SPORT" spanText="NOTRE ADN" text="Nous avons choisi de nous distinguer en intégrant le sport dans chaque aspect de nos services. Du team building à la billetterie sportive, nous utilisons le pouvoir du sport afin de stimuler la créativité, renforcer l’esprit d’équipe et inspirer l’excellence professionnelle. Oubliez les événements d’entreprise conventionnels, chez Tendances.Event, nous vous invitons à repousser vos limites et à découvrir une nouvelle dimension de l’événementiel d’entreprise.Notre agence vous accompagne dans la célébration du plus merveilleux jour de votre vie : votre enterrement de vie de garçon ou de jeune fille, dans une expérience à la fois sportive et inoubliable. Nous vous offrons la possibilité de choisir parmi plusieurs forfaits préétablis, tout en étant capables de créer sur mesure, de A à Z, votre événement, avec pour fil conducteur une passion commune : le sport. " btnText="" reverse="1"/>

    </div>
  )
}

export default Propos