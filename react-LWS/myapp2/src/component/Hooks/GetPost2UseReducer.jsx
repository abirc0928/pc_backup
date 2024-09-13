import React, { useEffect, useReducer } from 'react';
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case 'Error':
            return {
                loading: false,
                post: {},
                error: 'There was an error'
            }
        default:
            return state
    }
}

const GetPost2UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((data) => {
                dispatch({ type: 'Success', result: data });
            })
            .catch(() => {
                dispatch({ type: 'Error' });
            })
    }, [])

    return (
        <div>

            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}

        </div>
    );
};

export default GetPost2UseReducer;