import React from "react"
import './TopHeader.css'
import Arrow from "./Arrow.jsx"


const TopHeader = () => {
  return (
    <div className='menu-t-group'>
        
            <ul className="agences">
                <li className="group">.group</li>
                <li className="media">.media</li>
                <li className="sport">.sport</li>
                <li className="dev">.dev</li>
                <li className="one">.one</li>
                <li className="top">.top</li>
                <li className="tendances">tendances.event</li>
                
            </ul>
        
        
            <ul className="right-list" >
                <li className="support-client">SUPPORT CLIENT</li>
                <li className="nous-contacter"><span className="arrow">&#129141;</span> NOUS CONTACTER</li>
            </ul>
        
        
    </div>
  )
}

export default TopHeader
{/* <Arrow style={{ transform: 'rotate(90deg)' }}/> */}