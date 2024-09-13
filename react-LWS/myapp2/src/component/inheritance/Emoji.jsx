import React from 'react'
export default class Emoji extends React.Component{
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
    render(decorate){
        let text = 'I am the emoji component'
        if(decorate) text = decorate
        return(
            <div>{text}</div>
        )
    }
}