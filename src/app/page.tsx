'use client';
import { useState } from 'react';

export default function Home() {

  const GREETING_API_URL = 'http://localhost:3000/api/greeting';
  const [greeting, setGreeting] = useState('Click me!');

  async function getData() {
    const url = GREETING_API_URL;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setGreeting(json.data.greeting);      
    } catch (error: any) {
      console.error(error.message);
    }
  }

  function handleClick() {
    getData();
  }

  return (
    <button onClick={handleClick}>
      {greeting}
    </button>
  );
}