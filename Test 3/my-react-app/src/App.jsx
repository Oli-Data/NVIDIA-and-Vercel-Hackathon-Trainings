import { useState } from 'react';
import './App.css';

function App(){
  const[inputValue, setInputValue] = useState('');
  
  const[displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(inputValue);
  };

  return (
    <div className="container">
      <h1>The Echo Box </h1>

        <input
         type ='text'
         value={inputValue}
         onChange = {(e) => setInputValue(e.target.value)}
         placeholder = "Type something here... "
         />

          <button onClick = {handleButtonClick}>
           Make it Echo!
          </button>

          <h2>{displayText}</h2>
      </div>
  );  

}

export default App;