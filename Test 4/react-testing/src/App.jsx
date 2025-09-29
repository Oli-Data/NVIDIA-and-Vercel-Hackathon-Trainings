import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState('');

  const fetcchData = async () => {
    setMessage("Loading...");
  
  const response = await fetch('/api/hello');

  const data = await response.json();

  setMessage(data.text);
  }



  return (
      <div className = "container">
        <h1> API Connector </h1>

        <button onClick={fetchData}>

        </button>

        <h2>{message}</h2>
    </div>
  );
}

export default App
