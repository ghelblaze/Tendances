import React from 'react'
import BilleterieBTN from './billeterieBTN'

const Paragraph = ({url, title, spanText,text, btnText, styles,reverse, logo}) => {
  return (
    <div className={reverse==1? "paragraph-container row-reverse":"paragraph-container"}>
        <div className='paragraph-img-container'>
            <img src={url} alt="image" className='paragraph-img'/>
        </div>
        
        <div className="paragraph-content">
            <h3 className="paragraph-title">{title} <span>{spanText}</span> </h3>
            <p className="paragraph-text">{text}</p>
            <BilleterieBTN text={btnText} styles={styles} logo={logo}/>
        </div>

    </div>
  )
}

export default Paragraph