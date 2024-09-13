import React from 'react'

const WithCounter = (OriginalComponent, increase ) => {
    class newComponent extends React.Component {
        state = {
            count: 0,
        }
        incrementCount  = () => {
            this.setState((prevState) => ({ count: prevState.count + increase}));

        }
        render() {
            const {title} = this.props
            const {count} = this.state
            return <OriginalComponent count={count} incrementCount={this.incrementCount} title={title}></OriginalComponent>
        }

    }
    return newComponent
}


export default WithCounter