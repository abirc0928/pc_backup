import React from "react";
import Answers from "./Answers";
import classes from '../styles/Question.module.css'
function Question() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers></Answers>
    </div>
  );
}

export default Question;
