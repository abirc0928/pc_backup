import React from 'react'
import {Link} from 'react-router-dom'
function About() {
  return (
    <div>
      <h1>about</h1>
      <Link to={'/home'}>home</Link>
      <Link to={'/user/abir'} state={{name:'abir'}}>Abir</Link>
      <Link to={'/user/mead'}>Mead</Link>
    </div>
  )
}

export default About
