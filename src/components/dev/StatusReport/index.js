import React from 'react'
import './style.css'


function StatusReport({ outputDetails }) {
  return (
    <div className='status'>
      <p className='holder'>
        Status : <span className='report'>{outputDetails?.status?.description}</span>
      </p>
      <p className='holder'>
        Time : <span className='report'>{outputDetails?.time}</span>
      </p>
      <p className='holder'>
        Memory : <span className='report'>{outputDetails?.memory}</span>
      </p>
    </div>
  )
}

export default StatusReport