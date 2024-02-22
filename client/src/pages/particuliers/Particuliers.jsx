import React from 'react'
import './particuliers.css'
import proData from './part-data'
import Prestations from '../../components/Prestations'
const Particuliers = () => {
  return (
     <div>
      <div className="professionnels-header">
            <h1 className="propos-titre">NOS PRESTATIONS</h1>
      </div>
      <div className="pro-main">
          <Prestations data={proData}/>
      </div>
    </div>
  )
}

export default Particuliers