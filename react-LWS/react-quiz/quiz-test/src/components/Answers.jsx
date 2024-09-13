import React from 'react'
import Checkbox from './Checkbox'
import classes from '../styles/Answer.module.css'
function Answers() {
  return (
    <div className={classes.answer}>
        <Checkbox className={classes.answer} text=" A New Hope 1"></Checkbox>
    </div>
  )
}

export default Answers