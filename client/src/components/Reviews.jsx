import React from 'react'
import Singlereview from './Singlereview'
import BilleterieBTN from './billeterieBTN'

function Reviews() {
  return (
    <div className='reviews-div'>
        
            <h3 className="review-title">Faites comme eux, lancez-vous !</h3>
            <div className="reviews-logos">
                <img src="../../public/WGlogo.png" alt="waterGames" />
                <img src="../../public/HTlogo.png" alt="hagTime" />
                <img src="../../public/CAlogo.png" alt="coteAzure" />
                <img src="../../public/PoFlogo.png" alt="planetFinance" />
                <img src="../../public/RMlogo.png" alt="rugby" />
            </div>
            <div className="reviews-details">
                <Singlereview/>
            </div>
            <BilleterieBTN text="Contactez-nous" styles="btn-contact" logo='false'/>

        
       
    </div>
  )
}

export default Reviews