import GlobalStyle from './components/styles/Global.styles';
import Tutorial from './components/Tutorial';
import './assets/css/dark.css'
import { useState } from 'react'

import { ThemeProvider } from 'styled-components'

export default function App() {
    const [theme, setTheme] = useState('yes')
    function changeTheme() {
        if (theme == 'yes') {
            setTheme('no')
        }
        if (theme == 'no') {
            setTheme('yes')
        }

        console.log(theme)
    }

    return (
        <>
            <button onClick={changeTheme}>theme</button>
            <GlobalStyle></GlobalStyle>
            {/* <ThemeProvider theme={theme}>
                <Tutorial />
            </ThemeProvider> */}
            <Tutorial />

        </>
    );
}