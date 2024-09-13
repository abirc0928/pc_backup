import { useState, Component, useMemo, useReducer } from 'react'
import Clock from './component/Clock'
import ClockList from './component/ClockList'
import From from './component/From'
import Calculator from './component/Calculator'
// import Text from './component/inheritance/Text'
import Text from './component/composition/Text'
import Emoji from './component/composition/Emoji'
import Bracket from './component/composition/Bracket'
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'
import Hover from './component/render_props_14/Hover'
import Click from './component/render_props_14/Click'
import User from './component/render_props_14/User'
import Counter from './component/render_props_14/Counter'
import Section from './component/render_props_14/Section'
import ThemeContext from './context/ThemeContext'
import TodoClass from './component/Hooks/TodoClass'
import Todo from './component/Hooks/Todo'
import MyComponentClass from './component/Hooks/MyComponentClass'
import MyComponent from './component/Hooks/MyComponent'
import Title from './component/Hooks/Title'
import ShowCount from './component/Hooks/ShowCount'
import Button from './component/Button'
import ButtonCall from './component/Hooks/ButtonCall'
import React, { useCallback } from 'react'
import FromUseRef from './component/Hooks/FromUseRef'
import TimeUseRef from './component/Hooks/TimeUseRef'
import CounterUseReducer from './component/Hooks/CounterUseReducer'
import ComplexUseReducer from './component/Hooks/ComplexUseReducer'
import CounterThreeUseReducer from './component/Hooks/CounterThreeUseReducer'
import ComponentAUseReducer from './component/Hooks/ComponentAUseReducer'
import GetPostUserReducer from './component/Hooks/GetPostUseReducer'
import GetPost2UseReducer from './component/Hooks/GetPost2UseReducer'
import LayoutComponentOne  from './component/Hooks/LayoutComonent'
import LayoutComponentTwo  from './component/Hooks/LayOutComponetntTow'
import Logo from './component/Logo'
// import './assets/CSS/globle.css'

import Tutorial from './component/Tutorial'
export const counterContext = React.createContext()

const initialSate = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state;
  }
}
function App() {
  // const quantities = [1, 2, 3];

  // state = {
  //   theme: 'light',
  //   switchTheme: () => {
  //     this.setState(({theme}) =>{
  //       if (theme === 'dark'){
  //         return {
  //           theme: 'light'
  //         }
  //       }else{
  //         return {
  //           theme: 'dark'
  //         }
  //       }
  //     })
  //   }
  // }

  // const [show, setShow] = useState(true)

  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const incrementByOne = useCallback(() => {
  //   setCount1((prevCount) => prevCount + 1);
  // }, []);

  // const incrementByFive = useCallback(() => {
  //   setCount2((prevCount) => prevCount + 5);
  // }, []);

  // const isEvenOrOdd = useMemo(() =>{
  //   let i = 0;
  //   while (i < 1000000000) i += 1; // costly operation
  //   return count1 % 2 === 0;
  // }, [count1])

  const [count, dispatch] = useReducer(reducer, initialSate)

  return (
    <div className='App'>
      {/* <Clock></Clock>
       <ClockList quantity={quantities}></ClockList>
       <From></From>
       <Calculator></Calculator> */}
      {/* <Text></Text> */}
      {/* <Emoji>
            {({ addEmoji }) => (
                <Bracket>
                    {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>
            )}
        </Emoji> */}

      {/* <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter> */}
      {/* <Click></Click>
        <Hover></Hover> */}
      {/* <User render={(isLogIn) =>(isLogIn ? 'abir' : 'guest')}></User> */}

      {/* render props. lecture 14. data pass by props */}
      {/* <Counter render={(counter, incrementCont) => <Click count={counter} incrementCont = {incrementCont}></Click>}></Counter>
        <Counter render={(counter, incrementCont) => <Hover count={counter} incrementCont = {incrementCont}></Hover>}></Counter> */}

      {/* render props. lecture 14. data pass by Children*/}
      {/* <Counter>

        {(counter, incrementCont) =>
        (<Click count={counter} incrementCont={incrementCont}></Click>
        )}

      </Counter> */}

      {/* <Counter>

        {(counter, incrementCont) =>
        (<Hover count={counter} incrementCont={incrementCont}></Hover>
        )}

      </Counter> */}
      {/* <ThemeContext.Provider value={this.state}><Section></Section></ThemeContext.Provider> */}
      {/* <TodoClass></TodoClass> */}
      {/* <Todo></Todo> */}
      {/* <MyComponentClass></MyComponentClass> */}


      {/* <div>{show && <MyComponent></MyComponent>}</div>
      <p>
        <button type='button' onClick={() => {setShow((prevSate) => !prevSate)}}>
          {show ? 'Hide post' : 'Show post'}
        </button>
      </p> */}

      {/* <Title />
      <ShowCount count={count1} title="Counter 1" />
      
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <ButtonCall handleClick={incrementByOne}>Increment by one</ButtonCall>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <ButtonCall handleClick={incrementByFive}>Increment by five</ButtonCall> */}

      {/* <FromUseRef></FromUseRef>
      <TimeUseRef></TimeUseRef> */}

      {/* <CounterUseReducer/> */}

      {/* <ComplexUseReducer/> */}
      {/* <CounterThreeUseReducer></CounterThreeUseReducer> */}
      {/* <div>Count {count}</div>
      <counterContext.Provider value={{countDispatch: dispatch}}>
        <ComponentAUseReducer></ComponentAUseReducer>
      </counterContext.Provider> */}

      {/* <GetPostUserReducer></GetPostUserReducer> */}
      {/* <GetPost2UseReducer></GetPost2UseReducer> */}
      {/* <LayoutComponentOne></LayoutComponentOne>
      <LayoutComponentTwo></LayoutComponentTwo> */}
      {/* <h1>Learn with Sumit</h1>
      <Logo></Logo> */}
      <Tutorial></Tutorial>
    </div>
  )
}

export default App
