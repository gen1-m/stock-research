
export async function GET(req) {
	const url = 'https://mboum-finance.p.rapidapi.com/sc/search/B';
	
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': process.env.MBOUM_HOST,
	  }
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		return Response.json(result, { status: 200});
	} catch (error) {
		console.error(error);
		return Response.error();
	}
}