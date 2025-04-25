const WeatherData = ({ cityData, city }) => {

  if (!city) {
    return <div>Please search for a city first to view this weather report.</div>  
  }

  const data = cityData?.data?.iaqi
  
  return (
    <div>
      <h3>Weather</h3>
      <ul>
        <li>Temperature: {data?.t?.v ? `${data?.t?.v}°C` : 'Unavailable'} </li>
        <li>Humidity: {data?.h?.v ? `${data?.h?.v}%` : 'Unavailable'} </li>
        <li>Wind Speed: {data?.w?.v ? `${data?.w?.v} m/s` : 'Unavailable'} </li>
      </ul>
    </div>
  )
  
}

export default WeatherData