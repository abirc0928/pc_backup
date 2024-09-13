import React from 'react';
import { useContext } from 'react';
import { counterContext } from '../../App';


const ComponentBUseReducer = (props) => {
    const countContext = useContext(counterContext)
    return (
        <div>
            <div>
                <div>Component A</div>
                <button type="button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button type="button" onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            </div>
        </div>
    );
};

export default ComponentBUseReducer;