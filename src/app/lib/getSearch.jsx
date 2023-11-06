export async function getSearch(letter) {
  const host = process.env.BASE_URL_HOST;
  try {
    const res = await fetch(
      `${host}/api/rapid-yahoo/search/?letter=${letter}`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}