import React from 'react'
import image from '../assets/images/success.png'
import classes from '../styles/Summary.module.css'
function Summary() {
  return (
    <div>
         <div className={classes.summary}>
          <div className={classes.point}>
           {/* progress bar will be placed here */}
            <p className={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={classes.badge}>
            <img src={image} alt="Success" />
          </div>
        </div>
    </div>
  )
}

export default Summary