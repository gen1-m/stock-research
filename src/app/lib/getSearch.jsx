export async function getSearch(letter) {
    const res = await fetch(
      `http://localhost:3000/api/rapid-yahoo/search/?letter=${letter}`, {
      cache: 'no-store'
    });
  
    if(!res.ok) throw new Error('Failed to fetch data')
    
    return res.json()
  }