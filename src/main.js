// 1f1941ef26300e3cddf7f63da8d05595 Key API Weather 
import './style.css'
const city = document.querySelector('#textCity');
const cityResult = document.querySelector('#city');
const button = document.querySelector('.button');
const temperatura = document.querySelector('.temp');
const clima = document.querySelector('#clima');
const humidade = document.querySelector('#humidade');

const trabalhandoClima = (dados) => {
    console.log(dados);
    temperatura.innerHTML += (dados.main.temp).toFixed(1);
    cityResult.innerHTML = dados.name;
    clima.innerHTML = dados.weather[0].description;
    humidade.innerHTML = dados.main.humidity
}

// const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f1941ef26300e3cddf7f63da8d05595&lang=pt_br`;
const API_Clima = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f1941ef26300e3cddf7f63da8d05595&lang=pt_br`)
  .then((resulve) => resulve.json())
}
console.log(API_Clima(city));