import React from 'react'
import Singlereview from './Singlereview'
import BilleterieBTN from './billeterieBTN'

function Reviews() {
  return (
    <div className='reviews-div'>
        
            <h3 className="review-title">Faites comme eux, lancez-vous !</h3>
            <div className="reviews-logos">
                <img src="../../public/WGlogo.png" alt="waterGames" className='wt-logos' />
                <img src="../../public/HTlogo.png" alt="hagTime" className='wt-logos' />
                <img src="../../public/CAlogo.png" alt="coteAzure" className='wt-logos' />
                <img src="../../public/PoFlogo.png" alt="planetFinance" className='wt-logos' />
                <img src="../../public/RMlogo.png" alt="rugby" className='wt-logos'  />
            </div>
            <div className="reviews-details">
                <Singlereview/>
            </div>
            <BilleterieBTN text="Contactez-nous" styles="btn-contact" logo='false'/>

        
       
    </div>
  )
}

export default Reviews