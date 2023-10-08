'use client'
import React, { useState, useEffect } from 'react';

// Fetch data function
async function getData() {
  const res = await fetch("http://localhost:3000/api/yahooApi/", {
    method: "GET"
  });
  
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

// Home component
export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(){
      try {
        const result = JSON.parse(await getData());
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Check for loading or error state
  if (!data && !error) {
    return <main>Loading...</main>;
  }

  if (error) {
    console.error(error);
    return <main>Error loading data</main>;
  }

  // Extracting names from the data
  const names = data.body.map(obj => obj.name);

  return (
    <main>
      <h1>Names Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
