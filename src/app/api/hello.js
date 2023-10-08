const url = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/A';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': process.env.API_HOST
	}
};

export async function handler(req, res) {
    try {
        res = await fetch(url, options);
        const result = await res.data;
        res.status(200).json({result});
        console.log(result);
    } catch (error) {
        console.error(error);
    }    
    return;
}