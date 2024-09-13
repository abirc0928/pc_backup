import Content from './Content'
import React from 'react'
export default class Section extends React.Component {
    shouldComponentUpdate(){
        return false
    }
    render() {
        console.log('Section rendered')
        return (
            <div>
                <h1>This is section</h1>
                <Content></Content>

            </div>
        )
    }
}