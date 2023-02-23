import React, { useState } from 'react';
import './App.css';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';
    
function App() {
  const [currentColor, setCurrentColor] = useState([]);

  return (
      <>
          <ColorForm currentColor={ currentColor } setCurrentColor={ setCurrentColor } />
          <ColorDisplay currentColor={ currentColor } />
      </>
    );
}
  
export default App;
