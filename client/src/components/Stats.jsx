import React from 'react'

const Stats = ({number,text}) => {
  return (
    <div>
        <h2 className='statnum'>{number} </h2>
        <p className='stattxt'>{text}</p>
    </div>
  )
}

export default Stats