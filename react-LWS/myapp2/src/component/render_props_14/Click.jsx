import React from 'react'

export default class Click extends React.Component {
    // state = {
    //     count: 0,
    // };

    // incrementCount = () => {
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));
    // };
    render() {
        const {count, incrementCont} = this.props
        return ( 
            <div>
                <button type="button" onClick={incrementCont}>
                    Clicked {count} times
                </button>
            </div>
        );
    }
}