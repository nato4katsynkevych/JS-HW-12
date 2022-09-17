export default name

function name(country = "Ukraine") {
	try {
		return fetch(`https://restcountries.com/v3.1/name/${country}`)
			.then(data => data.json())
	}
	catch {
		console.log('err');
	}
}