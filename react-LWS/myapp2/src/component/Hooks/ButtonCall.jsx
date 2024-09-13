import React from 'react';

function ButtonCall({ handleClick, children }) {
    console.log(`rendering button ${children}`);

    return (
        <p>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    );
}

export default React.memo(ButtonCall);