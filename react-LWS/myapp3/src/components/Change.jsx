import React from 'react';
// import Button from './Button'
export default class Change extends React.Component {
    state = { btnName: 'Before' }
    handelClick = () => {
        if (this.state.btnName == 'Before') {
            this.setState({
                btnName: "After"
            })
        } else {
            this.setState({
                btnName: "Before"
            })
        }
    }
    render() {
        return (
            <div>
                {/* <Button></Button> */}
                <p>abir</p>
            </div >
        )
    }
}