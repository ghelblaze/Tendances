
import './TopHeader.css'
import Contact from "../Contact";


const TopHeader = ({contact,toggle}) => {
  
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
                <li className="support-client"><a href="https://tendances-group.agilix.io/" target="_blank" rel="noreferrer">SUPPORT CLIENT</a></li>
                <li className="nous-contacter" onClick={toggle}><span className="arrow">&#129141;</span> NOUS CONTACTER</li>
            </ul>
        
        
    </div>
  )
}

export default TopHeader
{/* <Arrow style={{ transform: 'rotate(90deg)' }}/> */}