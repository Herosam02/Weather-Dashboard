import React, { useState } from 'react';
import './App.css';

const weatherDatabase = {
  "New York": {
    location: { name: "New York", country: "USA" },
    current: {
      temp_c: 25,
      condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "London": {
    location: { name: "London", country: "UK" },
    current: {
      temp_c: 18,
      condition: { text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    },
  },
  "Paris": {
    location: { name: "Paris", country: "France" },
    current: {
      temp_c: 22,
      condition: { text: "Clear", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Berlin": {
    location: { name: "Berlin", country: "Germany" },
    current: {
      temp_c: 20,
      condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Moscow": {
    location: { name: "Moscow", country: "Russia" },
    current: {
      temp_c: 15,
      condition: { text: "Cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    },
  },
  "Beijing": {
    location: { name: "Beijing", country: "China" },
    current: {
      temp_c: 28,
      condition: { text: "Clear", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Tokyo": {
    location: { name: "Tokyo", country: "Japan" },
    current: {
      temp_c: 26,
      condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Seoul": {
    location: { name: "Seoul", country: "South Korea" },
    current: {
      temp_c: 24,
      condition: { text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    },
  },
  "Sydney": {
    location: { name: "Sydney", country: "Australia" },
    current: {
      temp_c: 22,
      condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Rio de Janeiro": {
    location: { name: "Rio de Janeiro", country: "Brazil" },
    current: {
      temp_c: 30,
      condition: { text: "Clear", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Cape Town": {
    location: { name: "Cape Town", country: "South Africa" },
    current: {
      temp_c: 18,
      condition: { text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    },
  },
  "Lagos": {
    location: { name: "Lagos", country: "Nigeria" },
    current: {
      temp_c: 30,
      condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Nigeria": {
    location: { name: "Lagos", country: "Nigeria" },
    current: {
      temp_c: 28,
      condition: { text: "Partly Cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    },
  },
  "USA": {
    location: { name: "New York", country: "USA" },
    current: {
      temp_c: 22,
      condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Brazil": {
    location: { name: "Rio de Janeiro", country: "Brazil" },
    current: {
      temp_c: 30,
      condition: { text: "Clear", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  // ... (add other countries in the same format)
  "Canada": {
    location: { name: "Toronto", country: "Canada" },
    current: {
      temp_c: 10,
      condition: { text: "Rainy", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "Japan": {
    location: { name: "Tokyo", country: "Japan" },
    current: {
      temp_c: 20,
      condition: { text: "Cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },
  "UK": {
    location: { name: "London", country: "UK" },
    current: {
      temp_c: 15,
      condition: { text: "Showers", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    },
  },

  // Add more countries as needed
};

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = (location) => {
    setLoading(true);
    setError(null);
    setWeather(null);

    setTimeout(() => {
      if (weatherDatabase[location]) {
        setWeather(weatherDatabase[location]);
      } else {
        setError('Failed to fetch weather data');
      }
      setLoading(false);
    }, 1000); // Simulate API call delay
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      fetchWeather(location);
    }
  };

  return (
    <div className="app">
      <div className="weather-dashboard">
        <h1>Weather Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
          <button type="submit">Get Weather</button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          weather && (
            <div className="weather-info">
              <h2>{weather.location.name}, {weather.location.country}</h2>
              <p>{weather.current.temp_c}°C</p>
              <p>{weather.current.condition.text}</p>
              <img src={weather.current.condition.icon} alt="weather icon" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;
