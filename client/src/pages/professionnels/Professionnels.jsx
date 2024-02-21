import React from 'react'
import './professionnels.css'
import proData from './pro-data'
import Prestations from '../../components/Prestations'
const Professionnels = () => {
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

export default Professionnels