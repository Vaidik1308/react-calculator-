import React from 'react'

const Screen = ({isEqual,previousNumber,evaluate}) => {
  return (
    <div className='screenArea'>
        {isEqual ? 
        <>
          <div className='inputScreen'>
            {previousNumber}
          </div>
          <div className='finalAns'>
            {evaluate}
          </div>
        </> : <>
          <div className='final'>
            {evaluate}
          </div>
        </>}
    </div>
  )
}

export default Screen