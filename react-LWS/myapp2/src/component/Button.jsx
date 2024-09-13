import React, { Component } from 'react'

export class Button extends Component {
  shouldComponentUpdate(nextProps){
    const {change: currentChange, locale: currentLocale} = this.props;
    const {change: nextChange, locale: nextLocale} = nextProps;
    if(currentChange === nextChange && currentLocale === nextLocale){
      return false;
    }else{
      return true;
    }
  }
  render() {
    console.log("button")
    const{change, locale, language, show} = this.props 
    return (
      <>
      <button onClick={() => change(locale)}>Cleck here for {language}</button>
      {show && <p>Hello</p>}
      </>
    )
  }
}

export default Button