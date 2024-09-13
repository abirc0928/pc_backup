import React from 'react'

export default function Hover({ count, incrementCont, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;

    console.log('Hover rendered')
    return (
        <div>
            <h1 onMouseOver={incrementCont} style={style}>
                Hovered {count} times
            </h1>
             <button type="button" onClick={switchTheme}>Change theme</button>
        </div>
    );
}