import React from 'react'
import './style.css'
import person from '../../Assets/person.png'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <div className='home'>
      <h1>.& Code</h1>
      <p className='changing'><span className="typewriter"></span></p>

      <div className='infoContainer'>
        <div className='immgContainer'>
          <img src={person} alt='a person walking with laptop' />
        </div>
        <p>This webapp uses the <strong>Monaco Editor</strong> to provide you the best
          experience over the editors & <strong>Judge0</strong> for compiling your code anytime anywhere.
          Just choose the language, write your code & there you go!
        </p>
      </div>

      <div className='optionContainer'>
        <div className='webOption'>
          <h3>Web Development</h3>
          <p>Code with HTML, CSS & Js and you can view your designed web results
            asynchronously.</p>
          <button onClick={() => { navigate('/webdevelopment') }} >Web.</button>
        </div>

        <div className='devOption'>
          <h3>Development</h3>
          <p>Code with more than 40+ languages
            and it will compile yor code with the outputs and details.</p>
          <button onClick={() => { navigate('/development') }} >Dev.</button>
        </div>
      </div>
    </div>
  )
}

export default Home