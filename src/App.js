import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';
    
function App() {
  const [currentColor, setCurrentColor] = useState("");
  
  const yourColor = ( newColor ) => {
    setCurrentColor( newColor );
  }
  
  return (
      <>
          <ColorForm onNewColor={ yourColor } />
          <ColorDisplay color={ currentColor } />
      </>
    );
}
  
export default App;
