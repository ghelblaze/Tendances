import React from 'react'
import { Link } from 'react-router-dom'
import './blog.css'
import blogData from './blog-data'
const Blog = () => {
  return (
    <div>
        <div className="blog-header">
            <h1 className="propos-titre">NOS ARTICLES</h1>
        </div>
        <div className="blog-main">
            {
              blogData.map((article,idx)=>{
                return(
                    <div className='articles-div' key={idx}>
                        <div className="article-img-container">
                            <img src={article.imgUrl} alt="article_img" className="article-img" />
                        </div>
                        <h5 className="article-date">{article.date}</h5>
                        <Link to={article.url} className="article-title">{article.title}</Link>
                        <p className="article-text">{article.text}</p>
                    </div>
                )
            })
            }

        </div>
    </div>
  )
}

export default Blog