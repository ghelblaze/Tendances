
import frame from '../../public/Frame.png'

const BilleterieBTN = ({text,styles,logo}) => {
  return (
    <div>
        <button className={styles} onClick={()=>alert("clicked")}><span>{!logo?<img src={frame} alt="ticket-frame" className='ticket' />:""}</span>{text}</button>
    </div>
  )
}

export default BilleterieBTN