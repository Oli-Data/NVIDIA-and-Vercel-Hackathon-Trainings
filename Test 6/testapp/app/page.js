'use client';
import { useState } from "react";

export default function Home(){
  const [data,setData] = useState(null);
  const [status, setStatus] = useState('idle')
  const [err, setErr] = useState('');

  const fetchPrice = async ()  => {
    try{
      setStatus('loading');
      setErr('');
      const res = await fetch('/api/mock-price');
      const json = await res.json();
      if(!res.ok) throw new Error(json?.error || `HTTP ${res.status}`);
      setData(json);
      setStatus('ok');
    } catch(e){
      setStatus('error');
      setErr(e.message || 'Failed to fetch');
      setData(null);
    }
  };

  return(
    <main className = "min-h-screen flex items-center justify-center p-6">
      <div className = "w-full max-w-md rounded-2xl shadow-lg border bg-white p-6">
        <h1 className = "text-2xl font-bold mb-4">Crypto Price (Mock)</h1>

        <button
          onClick = {fetchPrice}
          className = "rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
        >
          Fetch BTC
        </button>

        <div className = "mt-4 text-sm">
          {status === 'idle' && <p>Click the button to fetch.</p>}
          {status === 'loading' && <p className = "text-gray-600">Loading...</p>}
          {status === 'error' && <p className = "text-red-600">Error: {err}</p>}
          {status === 'ok' && data &&(
            <>
              <p>
                <span className = "font-semibold">{data.symbol}</span>: $
                {data.usd.toLocaleString()}
              </p>
              <p className = "text-gray-500 text-xs">
                Updated: {new Date(data.ts).toLocaleTimeString()}
              </p>
              </>
          )}
          </div>
          </div>
    </main>
  );
}