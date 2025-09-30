import { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  const fetchData = async () => {
    setMessage("Loading...");
  
  const response = await fetch('/api/hello');

  const data = await response.json();

  setMessage(data.text);
  };

  return (
      <div className = "container">
        <h1> API Connector </h1>

        <button onClick = {fetchData}>
        Fetch Message from Backend
        </button>

        <h2>{message}</h2>
    </div>
  );
}

export default App
