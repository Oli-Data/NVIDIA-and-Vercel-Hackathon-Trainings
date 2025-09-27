import { useState } from 'react';
import './App.css';

function App(){
    const[inpuvalue, setInputValue] = useState('');

    const [displayText, setDisplayText] = useState('');

    const handleButtonClick = () => {

        setDisplayText(inputValue);
    }
};

return(
    <div className = "container">
        <h1>The Echo Box</h1>
    </div>
)