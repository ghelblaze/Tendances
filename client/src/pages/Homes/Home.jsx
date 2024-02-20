import './Home.css'
import Form from './Form'
import BilleterieBTN from '../../components/billeterieBTN'
import Stats from "../../components/Stats"
import Paragraph from '../../components/Paragraph'
import Reviews from '../../components/Reviews'
import Section from '../../components/Section'



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
            <img src="./category-1-top14.png" alt="top14" className='cat1-top14' />
            <div className="category-1-text">
              <h3 className="cat-title">FINALE TOP 14</h3>
              <p className="cat-text">Vivez le frisson du TOP 14 à Marseille avec nous ! Découvrez nos offres exclusives pour une expérience sportive inoubliable.</p>
              <button className="cat-btn">réserver dès maintenant</button>
            </div>
          </div>
          <div className="category-2">
            
            <div className="category-1-text">
              <h3 className="cat-title">PARIS 2024</h3>
              <p className="cat-text">Découvrez l&#39;excitation pure de l&#39;événement sportif majeur de 2024 à Paris avec nos offres exclusives de revente d&#39;hospitalités.</p>
              <button className="cat-btn">réserver dès maintenant</button>
            </div>
          </div>
        </div>
      </div>
      <Paragraph reverse="1" styles="section-btn" url="./french-flag.png" title="Première Agence de Revente sur la " spanText="Côte d'Azur !" text="Découvrez l&#39;intensité du sport avec Tendances.Events, la nouvelle agence d&#39;événementiel sportif sur Monaco. Vivez des moments d&#39;exception lors d&#39;événements majeurs comme la finale du Top 14, plongez au cœur de l&#39;émotion sportive que la France attend. Explorez une multitude de disciplines et faites de chaque événement une expérience mémorable." btnText="Accéder à la billeterie"/>
      <div className="water-games">
        <div className="watergames-left-text">
          <img src="./monacowatergameslogo.png" alt="watergameslogo" className='WGlogo' />
          <div className="WG-left">
            <h3 className="WGtitle">Organisateur des monaco water games </h3>
            <p className="WGtext">Tendances.Event, partenaire incontournable de moments sportifs d&#39;exception ! Nous sommes ravis d&#39;avoir collaboré à des événements mémorables, tels que les prestigieux Monaco Water Games en partenariat avec l&#39;A.S. Monaco Rugby, avec le soutien du Gouvernement Princier. Dans le cadre unique de la Marina du Yacht Club de Monaco, du 12 au 14 juillet, nous avons créé une expérience sportive immersive, populaire, gratuite, et ouverte à tous</p>
            <BilleterieBTN text={"Découvrir cette première"} styles={'section-btn'} logo='false'/>
            <div className="collabs">
              <span className='collabs-text'>En collaboration avec:</span>
              <img src="./TS logo.png" alt="tslogo" />
              <img src="./YCMlogo.png" alt="ycmlogo" />
            </div>
          </div>
        </div>
        <div className="watergames-img-container">
          <img src="../../../public/waterGameSection.png" alt="sport" className="watergames-img" />
        </div>
        <div className="press-container">
          <div className="press">
          <img src="./press-monacoinfo.png" alt="monacoinfo" className="press-logo" />
          <img src="./press-monacomatin.png" alt="monacomatin" className="press-logo" />
          <img src="./press-monacotribune.png" alt="monacotribune" className="press-logo" />
          <img src="./press-bulletin.png" alt="bulletin" className="press-logo" />
          <img src="../../../public/image 80.png" alt="bulletin" className="press-logo" />
          <img src="../../../public/image 81.png" alt="bulletin" className="press-logo" />
          <img src="../../../public/image 82.png" alt="bulletin" className="press-logo" />
          <img src="../../../public/image 83.png" alt="bulletin" className="press-logo" />
          <img src="../../../public/image 84.png" alt="bulletin" className="press-logo" />
          
        </div>
        </div>   
      </div>
      <div className="stats">
        <div className="stats-header">
          <h3 className="stats-title">99% DE RETOURS POSITIFS</h3>
          <p className="stats-title-text">auprès de la population monégasque</p>
        </div>
        <div className="stats-numbers">
          <Stats number="+100" text="bénévoles"/> 
          <Stats number="+300" text="participants"/> 
          <Stats number="+50" text="intervenants"/> 
          <Stats number="1000" text="personnes/jour environ"/> 
          <Stats number="+10" text="Des plus grandes médias de la régions on fait des articles/reportages sur nous"/> 
          <Stats number="42736" text="Personnes touchées sur les réseaux sociaux"/>  
        </div>
      </div>
      <Paragraph styles="paragraph-btn" logo='false' url="../../../public/tennis.png" title="Vos Team Buildings, Séminaires et Conventions façon " spanText="Tendances.Events!" text="Réinventez vos Team Buildings avec des expériences sportives uniques, alliant compétition, esprit d'équipe et succès professionnel. Donnez une nouvelle dimension à vos séminaires et conventions avec notre approche dynamique. Unissez vos forces, atteignez de nouveaux sommets et transformez chaque événement en une victoire mémorable." btnText="Boostez vos événements pro"/>
      <Section/>
      <Reviews />
      <Paragraph styles="paragraph-btn" logo='false'  url="../../../public/nrj.png" title="Énergie et Excellence : Des  " spanText="Intervenants d'Élite" text="Découvrez le privilège d'avoir des sportifs d'exception, des championnes inspirantes et des coachs de renom à vos événements ! Plongez dans l'univers de l'élite sportive, recevez des conseils exclusifs et boostez la motivation de votre équipe. Tendances.Events, là où chaque intervention crée l'étincelle de la réussite. Faites de votre événement une expérience inoubliable !" btnText="Découvrez nos sportifs"/>
      
    </div>
        
    
  )
}

export default Home