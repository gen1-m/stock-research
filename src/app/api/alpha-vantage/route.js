export async function GET() {
  const apiUrl = `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=${process.env.ALPHAV_API_KEY}`

  const options = {
    method: "GET",
    json: true,
    headers: {
        'User-Agent': 'request'
    }
  }

  const response = await fetch(apiUrl, options);
  const result = await response.text();
  if (!result) throw new Error('Failed to fetch data')
  
  return Response.json(result, { status: 200 })
}
