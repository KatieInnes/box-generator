import React, { useState } from 'react';
    
const ColorDisplay = (props) => {
    const { currentColor } = props;

    return (
        <>
            {
                currentColor.map((color, index) => (
                    <div key={index} 
                    style={{display: "inline-block",
                            margin: "15px",
                            height: "100px",
                            width: "100px",
                            backgroundColor: color}}>
                    </div>
                ))
            }
        </>
    );
};
    
export default ColorDisplay;