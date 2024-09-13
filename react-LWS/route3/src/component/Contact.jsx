import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Contact() {

  return (
    <div>
      <h1>Contact us</h1>
      <Link to="/company">Company</Link>
      <Link to="/channel">Channel</Link>
      <Link to="/other">Other</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default Contact