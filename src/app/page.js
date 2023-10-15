// Fetch data function
async function getData() {
  const res = await fetch(
    `http://localhost:3000/api/rapid-yahoo/`, {
      method: "GET", 
    cache: 'no-store'
  });

  if(!res.ok) throw new Error('Failed to fetch data')
  
  return res.json()
}

// Home component
export default async function Home() {
  const result = await getData()
  const data = result.body
  return (
    <>
      <main className='grid justify-items-center'>
        <table>
          <thead>
            <tr className="text-lg text-orange-600 px-4">
              <th>Stocks for today</th>
              <th>Symbol</th>
              <th>Exchange Index</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-white">
                <td className="px-4">{item.name}</td>
                <td className="px-4">{item.symbol}</td>
                <td className="px-4">{item.exchDisp}</td>
                <td className="px-4">{item.typeDisp}</td>                
              </tr>
            ))}
          </tbody>
        </table>
        
      </main>
    </>
  );
}
