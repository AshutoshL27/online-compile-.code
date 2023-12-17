import React from 'react'
import './style.css';

function CustomInputWindow({ customInput, setCustomInput }) {
  return (
    <>
      <textarea
        className='text-input'
        rows={6}
        placeholder='Custom Input...'
        value={customInput}
        onChange={(e) => (setCustomInput(e.target.value))}
      >
      </textarea>
    </>
  )
}

export default CustomInputWindow