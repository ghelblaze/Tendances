import React from "react"
import './TopHeader.css'
import Arrow from "./Arrow.jsx"


const TopHeader = () => {
  return (
    <div className='top-header-container'>
        <div className="top-left">
            <ul className="left-list">
                <li className="left-list-items">.group</li>
                <li className="left-list-items">.media</li>
                <li className="left-list-items">.sport</li>
                <li className="left-list-items">.dev</li>
                <li className="left-list-items">.one</li>
                <li className="left-list-items">.top</li>
                <li className="left-list-items">tendances.event</li>
                
            </ul>
        </div>
        <div className="top-right">
            <ul className="right-list" >
                <li className="right-list-items">SUPPORT CLIENT</li>
                <li className="right-list-items"><Arrow style={{ transform: 'rotate(90deg)' }}/> NOUS CONTACTER</li>
            </ul>
        </div>
        
    </div>
  )
}

export default TopHeader