import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
   
  state = {date: new Date()}

  componentDidMount(){
    this.ClockTimer =  setInterval(()=>{
      this.tick()
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.ClockTimer)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }
    render(){
    return (
      <h1>{this.state.date.toLocaleTimeString(this.props.locale)}
      </h1>
    )
  }
}

export default Clock;
