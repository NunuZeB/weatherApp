

///let dataSource = "https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${myApiKey}"
const myApiKey = "f3dfcac570e3e589af98edb45ea21e4f";
// Get DOM elements
const getWeatherBtn = document.getElementById('getWeather');
const dataDiv = document.getElementById('weatherData');

// Add event listener to the 'Check the Weather' button
getWeatherBtn.addEventListener('click', () => {
	const zip = document.getElementById('zip').value;
	if (!zip) {
		alert('Enter your zip code!');
		return;
	}
	// Get the current weather using the zip code
	getCurrentWeatherByZip(zip)
		.then(data => {
			alert('Weather data!');
			// Display the weather data on the page
			renderData(data);
		})
		.catch(() => alert('Failed to get weather data. Please try again later.'));
});

// Function to get the current weather data using the zip code
async function getCurrentWeatherByZip(zip) {
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${myApiKey}`)
		const data = await response.json()
		return data;
	} catch (error) {
		alert('Please try again later.');

	}
}
// Function to display the weather data on the page
function renderData(data) {
	const cityName = data.name;
	const temperature = data.main.temp;
	const date = new Date().toLocaleDateString();
	const weatherHTML = `
		<p>Date: ${date}</p>
		<p>City: ${cityName}</p>
		<p>Temperature: ${temperature}&deg;F</p>
	`;
	dataDiv.innerHTML = weatherHTML;

}
