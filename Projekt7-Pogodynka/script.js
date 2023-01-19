const form = document.querySelector("#form");
const inputCity = document.querySelector("#city");
let mainWeatherContainer = document.querySelector("#mainWeatherContainer");
let mainWeather;
let activeCity;

const submitFunc = async (event) => {
  event.preventDefault();
  activeCity = inputCity.value;

  if (!activeCity) {
    console.log("Please enter a city");
    return;
  }
  const mainWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${activeCity}&appid=927134943d81eb3635cd2d278538c69c`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  console.log(mainWeather);
  displayWeather(mainWeather, mainWeatherContainer);
};
form.addEventListener("submit", submitFunc);

const displayWeather = (data, place) => {
  place.innerHTML = "";

  let noteElement = document.createElement("div");
  noteElement.innerHTML = `
  <div class="m-auto p-4 border-2 rounded-lg flex flex-col justify-center gap-2">
      <h2 class="text-lg font-bold m-auto">${data.name}</h2>
      <p class="text-sm m-auto">${data.weather[0].description}</p>
      <p class="text-4xl m-auto"> ${kelvinToCelsius(data.main.temp)}C</p>
      </div>
      
    `;
  place.appendChild(noteElement);
};
function kelvinToCelsius(kelvin) {
  return Math.floor(kelvin - 273.15);
}
