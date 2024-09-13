import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






// class Clock extends React.Component{
//   render(){
//     return (
//       <h1>Hello world {new Date().toLocaleTimeString(this.props.local)}
//       </h1>
//     )
//   }
// }

// const ClockCom = new Clock()

// ReactDOM.render( <Clock local="bn-BD" /> , document.getElementById('root'));



