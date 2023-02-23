import React, { useState } from 'react';
    
const ColorForm = (props) => {
    const { currentColor, setCurrentColor } = props;

    const [pickColor, setPickColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentColor( [...currentColor, pickColor])
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color"
                onChange={ (e) => setPickColor(e.target.value) }
                // value={ currentColor }
            />
            <button>Add</button>
        </form>
    );
};
    
export default ColorForm;