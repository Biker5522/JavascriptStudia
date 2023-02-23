const form = document.querySelector("#form");
const inputCity = document.querySelector("#city");
let mainWeatherContainer = document.querySelector("#mainWeatherContainer");
let pinnedWeatherContainer = document.querySelector("#pinnedWeatherContainer");
let mainWeather;
let activeCity;

let pinnedWeathers = [];

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
  console.log(data);

  let noteElement = document.createElement("div");
  noteElement.innerHTML = `
  <div class="m-auto p-4  shadow-2xl rounded-lg flex flex-col justify-center bg-gray-200 text-gray-100 text-gray-700 shadow-gray-300">
  <div class="float-right m-auto mr-2" onClick=pinWeather()>+</div>
  
    <img src="http://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png" class="bg-white rounded-[7em] mb-2 bg-gray-400/70"/>
    <p class="text-[4em] m-auto font-bold"> ${kelvinToCelsius(
      data.main.temp
    )}°C</p>
      <h2 class="text-xl font-bold m-auto text-gray-500 uppercase">${
        data.name
      }</h2>
      <p class="text-xl m-auto text-gray-600 pb-4">${
        data.weather[0].description
      }</p>
      </div>
      
    `;
  place.appendChild(noteElement);
};
const kelvinToCelsius = (kelvin) => {
  return Math.floor(kelvin - 273.15);
};
const checkWeather = () => {
  console.log("updating..");
  console.log(mainWeather);
  if (activeCity) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${activeCity}&appid=927134943d81eb3635cd2d278538c69c`
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
    console.log("update main weather");
  }
};
const pinWeather = () => {
  console.log(activeCity + " pinned");
  let pin = localStorage.getItem("pinnedWeathers");
  if (pin) {
    pinnedWeathers = JSON.parse(pin);
  }
  console.log(pinnedWeathers);
  pinnedWeathers.unshift(activeCity);
  localStorage.setItem("pinnedWeathers", JSON.stringify(pinnedWeathers));
};

setInterval(checkWeather, 30000);

const displayPinnedWeathers = async () => {
  let storedPinnedWeathers = JSON.parse(localStorage.getItem("pinnedWeathers"));
  console.log("updating pinned weathers");
  if (storedPinnedWeathers) {
    pinnedWeatherContainer.innerHTML = "";
    for (let i = 0; i < storedPinnedWeathers.length; i++) {
      const pinnedWeather = storedPinnedWeathers[i];
      let weathersFetch = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${pinnedWeather}&appid=927134943d81eb3635cd2d278538c69c`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error));
      console.log("xdddd");
      console.log(weathersFetch);
      let pinnedElement = document.createElement("div");
      pinnedElement.innerHTML = `
  <div class="m-auto p-4  shadow-2xl rounded-lg flex flex-col justify-center bg-gray-200 text-gray-100 text-gray-700 shadow-gray-300">
  
  
    <img src="http://openweathermap.org/img/wn/${
      weathersFetch.weather[0].icon
    }@2x.png" class="bg-white rounded-[7em] mb-2 bg-gray-400/70"/>
    <p class="text-[4em] m-auto font-bold"> ${kelvinToCelsius(
      weathersFetch.main.temp
    )}°C</p>
      <h2 class="text-xl font-bold m-auto text-gray-500 uppercase">${
        weathersFetch.name
      }</h2>
      <p class="text-xl m-auto text-gray-600 pb-4">${
        weathersFetch.weather[0].description
      }</p>
      </div>
      
    `;
      pinnedWeatherContainer.appendChild(pinnedElement);
    }
  } else {
    console.log("no pins");
  }
};
displayPinnedWeathers();
setInterval(displayPinnedWeathers, 4000);
