import { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    })
    const { title, description } = todo

    // const [warning, setWarning] = useState('')

    // const handleInput = (e) => {
    //     const inputValue = e.target.value;
    //     const updatedWarning = inputValue.includes('.js')
    //         ? 'You need JavaScript skill to complete the task. Do you have it?'
    //         : null;

    //     setTodo(inputValue)
    //     setWarning(updatedWarning)
    // };


    return (
        <div>
            <p>{title}</p>
            <p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        })} />
            </p>
            <p>
                <textarea
                    name="todo"
                    value={description}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            description: e.target.value,
                        })}
                />
            </p>
            <hr />
            {/* <h2>{warning || 'Good choice!'}</h2> */}
        </div>
    );

}

export default Todo;