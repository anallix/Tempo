// WeatherInformations5Days.jsx
import React from 'react';
import './weatherinformations5Days.css'; // Verifique se o caminho está correto

function WeatherInformations5Days({ weather5Days }) {
    console.log("Dados do tempo 5 dias:", weather5Days);

    if (!weather5Days) {
        return <div>Sem dados disponíveis</div>;
    }

    const { list } = weather5Days;

    // Agrupar previsões por data
    const dailyForecasts = list.reduce((acc, day) => {
        const date = new Date(day.dt * 1000).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = {
                temp: day.main.temp,
                iconCode: day.weather[0]?.icon,
                description: day.weather[0].description,
            };
        } else {
           
        }
        return acc;
    }, {});

    // Obter as datas únicas
    const uniqueDates = Object.keys(dailyForecasts);

    return (
        <div className='weather-container'>
            <h2>Previsão para os próximos 5 dias</h2>
            <div className='weather-info'>
                {uniqueDates.slice(0, 5).map((date, index) => {
                    const { temp, iconCode, description } = dailyForecasts[date];
                    const tempCelsius = temp ? Math.round(temp) : "N/A";
                    return (
                        <div key={index} className='daily-forecast'>
                            <p className='temperature'>Temperatura: {tempCelsius}°C</p>
                            {iconCode && (
                                <img
                                    src={`http://openweathermap.org/img/wn/${iconCode}.png`}
                                    alt="Ícone do tempo"
                                />
                            )}
                            <p className='description'>{description}</p>
                            <p>Data: {date}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default WeatherInformations5Days;
