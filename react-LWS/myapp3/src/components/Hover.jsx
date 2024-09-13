import React from 'react'
import WithCounter from './WithCounter'
class Hover extends React.Component {
    // state = {
    //     count: 0,
    // }
    // handelClick = () =>{
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));

    // }
    render() {
        const { count, incrementCount, title } = this.props
        return (
            <div>
                <p>{title}</p>
                <p onMouseOver={incrementCount}>Hover {count}</p>
            </div>
        )
    }
}

export default WithCounter(Hover, 5)