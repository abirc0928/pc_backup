import { useReducer } from 'react'
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
export default function CounterThreeUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialSate)
    const [count2, dispatch2] = useReducer(reducer, initialSate)
    return (
        <div>
            <div>
                <div>Count - {count}</div>
                <button type="button" onClick={() => dispatch('increment')}>Increment</button>
                <button type="button" onClick={() => dispatch('decrement')}>Decrement</button>
            </div>
            <div>
                <div>Count - {count2}</div>
                <button type="button" onClick={() => dispatch2('increment')}>Increment</button>
                <button type="button" onClick={() => dispatch2('decrement')}>Decrement</button>
            </div>
        </div>
    )

}