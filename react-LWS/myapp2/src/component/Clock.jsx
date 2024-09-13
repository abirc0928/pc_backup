import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

class Clock extends React.Component {

  state = { date: new Date(), locale: "bn-BD" }

  componentDidMount() {
    this.ClockTimer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.ClockTimer)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  handelClick = (locale) => {
    this.setState({
      locale,
    })
  }
  render() {
    const { date, locale } = this.state
    // let button;
    // if (locale === "bn-BD") {
    //   button = (
    //     <Button change={this.handelClick} locale="en-US" language='English'></Button>
    //   )
    // } else {
    //   button = (
    //     <Button change={this.handelClick} locale="bn-BD" language='Bangla'></Button>
    //   )
    // }
    return (
      <>
        <h1>{this.state.date.toLocaleTimeString(this.state.locale)}
        </h1>
        {
          locale === "bn-BD" ? (<Button change={this.handelClick} locale="en-US" language='English' show = {false} ></Button>) : (<Button change={this.handelClick} locale="bn-BD" language='Bangla' show={true}></Button>)
        }

      </>
    ) 
  }
}

export default Clock;
