import React from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  const navpage = (url) => {
    navigate(url)
  }
 
  return (
    <div>
      <h1>home</h1>
      <Link to={'/about'}>about</Link><br></br>
      <button onClick={()=>navpage('/about')}>About</button><br></br>
      <button> <Link to={'/filter'}>Filter use Link </Link></button><br></br>
      <button onClick={()=>navpage('/filter')}>Filter use navigate</button>
    </div>
  )
}

export default Home
