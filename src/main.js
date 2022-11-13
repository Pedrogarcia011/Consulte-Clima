// 1f1941ef26300e3cddf7f63da8d05595 Key API Weather 
import './style.css'
const city = 'Brasília'

// const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f1941ef26300e3cddf7f63da8d05595&lang=pt_br`;
const API_Clima = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f1941ef26300e3cddf7f63da8d05595&lang=pt_br`)
  .then((resulve) => resulve.json())
}
console.log(API_Clima(city));