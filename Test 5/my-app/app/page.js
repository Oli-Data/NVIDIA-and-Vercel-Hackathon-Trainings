'use client';
import { useState } from "react";

export default function Home(){
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    setMessage('Loading...');
    const res = await fetch('/api/hello');
    const data = await res.json();
    setMessage(data.text);
  };

  return (
    <main className = "flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className = "text2x1 font-bold mb-4">API Connector</h1>
      <button
        onClick = {fetchData}
        className = "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fetch Message from Backend
        </button>
        <h2 className = "mt-4">{message}</h2>
    </main>
  );
}