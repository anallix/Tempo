// WeatherInformations.jsx
import React from 'react';
import './weatherinformation.css';

function WeatherInformations({ weather }) {
    console.log("Dados do tempo:", weather);

    if (!weather) {
        return <div>Sem dados disponíveis</div>;
    }

    const temp = weather.main?.temp;
    const tempCelsius = temp ? Math.round(temp) : "N/A";
    const cityName = weather.name || "Cidade não encontrada";
    const iconCode = weather.weather[0]?.icon;

    return (
        <div className='weather-container'>
            <div className='city-header'>
                <h2>{cityName}</h2>
                {iconCode && (
                    <img
                        src={`http://openweathermap.org/img/wn/${iconCode}.png`}
                        alt="Ícone do tempo"
                    />
                )}
            </div>
            <div className='weather-info'>
                <p className='temperature'>Temperatura: {tempCelsius}°C</p>
                <p className='description'>{weather.weather[0].description}</p>
                <div className='details'>
                    <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                    <p>Umidade: {weather.main.humidity}%</p>
                    <p>Pressão: {weather.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherInformations;
