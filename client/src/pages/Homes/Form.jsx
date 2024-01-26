import React from 'react'
import './form.css'


const Form = () => {
  return (
    <div className='searchBox'>
        <label htmlFor="identity">Je suis un</label>
        <select name="identity" id="identity">
            <option value="professionel">Professionel</option>
            <option value="particulier">Particulier</option>
            
        </select>
        <label htmlFor="evenement">et je souhaite</label>
        <select name="evenement" id="evenement">
            <option value="creer_evenement">Créer mon événement</option>
            
        </select>
        <button className='scope'><img src="./scope.png" alt="scope"  /></button>
    </div>
  )
}

export default Form