import React from 'react'
import { Link } from 'react-router-dom'

const Prestations = ({data}) => {
  return (
    <div className={data.length <3 ? 'prestation-main-flex':'prestation-main'}>
       {
              data.map((prestation,idx)=>{
                return(
                    <div className='articles-div' key={idx}>
                        <div className="article-img-container">
                            <img src={prestation.imgUrl} alt="article_img" className="prestation-img" />
                        </div>
                        <h5 className="article-date">{prestation.title}</h5>
                        <p className="article-text">{prestation.text}</p>
                        <Link to={prestation.url} className="prestation-link">EN SAVOIR PLUS</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Prestations