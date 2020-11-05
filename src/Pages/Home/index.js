import React from 'react'
import './styless.css'

const Home = () => {
  return (
    <div id='home-container'>
      <div id='wrapper-home'>
        <div id='main-texts-div'>
          <p>Be Kind.</p>
          <p>Inspire.</p>
          <p>Save.</p>
        </div>
        <div id='btn-div'>
          <button className='btn-home' id='first-btn'>Start Helping</button>
          <button className='btn-home' id='second-btn'>See More</button>
        </div>
        <p id='info-end-page'>This project was developed by Lucas Alves. It's a "Vercel like" homepage interface (Black Theme).<br /> You can talk to me in:  <a href='https://www.linkedin.com/in/lucasalvesafonso/'>LinkedIn</a> | <a href='https://github.com/devlucasalaf'>Github</a></p>
      </div>
    </div>
  )
}

export default Home