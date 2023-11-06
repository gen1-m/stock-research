
export async function GET(request) {
	const { searchParams } = new URL(request.url)
	const letter = searchParams.get('letter')
	var value = 'ne/news'

	if (letter) value = 'sc/search'

	const url = `https://yahoo-finance15.p.rapidapi.com/api/yahoo/${value}/${letter}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.API_KEY,
			'X-RapidAPI-Host': process.env.YAHOO_HOST,
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		return Response.json(JSON.parse(result), { status: 200});
	} catch (error) {
		console.error(error);
		return Response.error();
	}
}