import React, { useEffect, useState } from "react";

export default function MyComponent(){
    const [count, setCount] = useState(0)
    // const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        document.title = `Clicked ${count} times`;
        console.log('click');
    }, [count])

    useEffect(() => {
        console.log('clock ticking');
        const interval = setInterval(tick, 1000)

        return () =>{
            console.log("component unmounted")
            clearInterval(interval)
        }

    }, [])


    const addClick = () =>{
        setCount((prevCount) => prevCount + 1)
    }
   const tick = () => {
        console.log('ticking');
        setDate(new Date())
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            {/* <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            </p> */}
            <p>
                <button onClick={addClick} type="button">Click</button>
            </p>
        </div>
    )
}