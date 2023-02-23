import React, { useState } from 'react';
    
const ColorDisplay = (props) => {
    return (
        <>
            <h1>Current Color</h1>
            <p>{ props.color }</p>
        </>
    );
};
    
export default ColorDisplay;