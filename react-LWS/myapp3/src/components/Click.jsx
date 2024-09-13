import React from 'react'
import WithCounter from './WithCounter'

class Click extends React.Component {
    // state = {
    //     count: 0,
    // }
    // handelClick = () =>{
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));
        
    // }
    
    render(){
        const {count, incrementCount, title} = this.props
       
        return(
            <div>
                <p>{title}</p>
                <button onClick={incrementCount}>CLICK {count} times</button>
            </div>
        )
    }
}

export default WithCounter(Click, 2);