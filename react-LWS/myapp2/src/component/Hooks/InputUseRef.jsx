import React from 'react';

const InputUseRef = ({type, placeholder}, ref) => {
    return (
        <div>
            <input ref={ref}  type={type}  placeholder={placeholder}/>
        </div>
    );
};

const forwardedInput = React.forwardRef(InputUseRef)

export default forwardedInput;
