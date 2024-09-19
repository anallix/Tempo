// App.jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInformations from './componentes/WeatherInformations/weatherinformation'; 
import WeatherInformations5Days from './componentes/WeatherInformations5Days/weatherinformations5Days'; 

function App() {
  const [weather, setWeather] = useState(null); 
  const [weather5Days, setWeather5Days] = useState(null); 
  const inputRef = useRef(null);

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "01cd9c3200d8208dad52f73c1aa5f730";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`; 

    try {
      const response = await axios.get(url);
      const apiInfo5Days = await axios.get(url5Days); 
      setWeather(response.data);
      setWeather5Days(apiInfo5Days.data);

      console.log("Resposta da API:", response.data); 
    } catch (error) {
      console.error("Erro ao buscar dados da cidade:", error.message);
    }
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <div className="input-group">
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
      </div>
      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
