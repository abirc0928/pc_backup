import {useEffect, useRef} from 'react'
import InputUseRef from './InputUseRef'

export default function FromUseRef(){

    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    },[])
    
    
    return(
        <div>
            <p>
                {/* <input ref={inputRef}  type="text"  placeholder="Enter something"/> */}
                <InputUseRef ref={inputRef}  type="text"  placeholder="Enter something"></InputUseRef>
                
            </p>
        </div>
    )
}