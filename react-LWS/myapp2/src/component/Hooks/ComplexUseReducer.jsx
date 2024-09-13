import { useReducer } from 'react'
const initialSate = {
    counter1: 0,
    counter2: 0
}
const reducer = (state, action) => {
   
    switch (action.type) {
        case 'increment1':
            return { ...state, counter1: state.counter1 + action.value }
        case 'decrement1':
            return { ...state, counter1: state.counter1 - action.value }
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value }
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value }
        default:
            return state;
    }
}
export default function ComplexUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialSate)
    return (
        <div>
            <div>
                <div>Count1 - {count.counter1}</div>
                <button type="button" onClick={() => dispatch({
                    type: 'increment1',
                    value: 1
                })}>Increment1 by 1</button>

                <button type="button" onClick={() => dispatch({
                    type: 'decrement1',
                    value: 1
                })}>Decrement1 by 1</button>
                
            </div>
            <div>
                <div>Count2 - {count.counter2}</div>
                <button type="button" onClick={() => dispatch({
                    type: 'increment2',
                    value: 1
                })}>Increment2 by 1</button>
                
                <button type="button" onClick={() => dispatch({
                    type: 'decrement2',
                    value: 1
                })}>Decrement by 1</button>
                
            </div>

        </div>

    )

}