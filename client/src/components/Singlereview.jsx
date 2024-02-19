import React from 'react'
import dataReviews from './review'

const Singlereview = () => {
  return (
    <div className='reviews-grid'>
        {
            dataReviews.map((review,idx)=>{
                return(
                    <div className='review-div' key={idx}>
                        <div className="title">
                            <img src={review.imgUrl} alt="" />
                            <p className="author-name">{review.name}</p>
                        </div>
                        <div className="avis">
                            {review.review}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Singlereview