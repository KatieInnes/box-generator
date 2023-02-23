import React, { useState } from 'react';
    
const ColorForm = (props) => {
    const [pickColor, setPickColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor( pickColor );
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Pick a color:</h1>
            <textarea 
                rows="1"
                cols="20"
                onChange={ (e) => setPickColor(e.target.value) }
                value={ pickColor }
            ></textarea>
            <input type="submit" value="Add" />
        </form>
    );
};
    
export default ColorForm;