import { getSearch } from "../lib/getSearch"

export default async function Watchlist() {
    const letter = 'A'
      const result = await getSearch(letter)
      const data = result.body
    
      const tableHeaders = ["Stocks for today", "Symbol", "Exchange Index", "Type"]
    
      return (
        <>
          <main className='grid justify-items-center'>
            <table>
              <thead>
                <tr>
                {tableHeaders.map((header, index) => (
                    <th 
                      key={index} 
                      className="text-3xl font-sans text-orange-600 px-4"
                    >
                      {header}
                    </th>
                ))}
                </tr>
              </thead>
              <tbody>
                {data.map((stock, index) => (
                  <tr key={index}>
                    <td className="text-white pl-6">{stock.name}</td>
                    <td className="text-white pl-6">{stock.symbol}</td>
                    <td className="text-white pl-6">{stock.exchDisp}</td>
                    <td className="text-white pl-6">{stock.typeDisp}</td>                
                  </tr>
                ))}
              </tbody>
            </table>
            
          </main>
        </>
      );
}

