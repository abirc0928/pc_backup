import Counter from './Counter'
import Hover from './Hover'
import ThemeContext from '../../context/ThemeContext'
import React from 'react'
import {useContext} from 'react'


// class use korle context use korar niyom
// export default class Content extends React.Component {
//     componentDidMount() {

//         console.log(this.context)
//     }

//     render() {
//         const { theme, switchTheme } = this.context
//         return (
//             <div>
//                 <h1>This is Content</h1>
//                 <Counter>

//                     {(counter, incrementCont) => (
//                         <Hover
//                             count={counter}
//                             incrementCont={incrementCont}
//                             theme={theme}
//                             switchTheme={switchTheme}>
//                         </Hover>

//                     )}

//                 </Counter>
//             </div>
//         )
//     }
// }

// Content.contextType = ThemeContext;



export default function Content()  {

    const context = useContext(ThemeContext)
    const {theme,switchTheme } = context
    console.log('Content rendered')
    return (
        <div>
            <h1>This is Content</h1>
            <Counter>

                {(counter, incrementCont) => (
                    <Hover
                        count={counter}
                        incrementCont={incrementCont}
                        theme={theme}
                        switchTheme={switchTheme}>
                    </Hover>

                )}

            </Counter>
        </div>
    )
}
