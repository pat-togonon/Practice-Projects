const PollutantsData = ({ cityData, city }) => {

  if (!city) {
    return <div>Please search for a city first to view this pollutant concentration levels report.</div>  
  }
  
  const data = cityData?.data?.iaqi
  
  return (
    <div>
      <h3>What's in your air?</h3>
      <p>Pollutants Concentration Levels</p>
      <ul>
        <li>PM2.5: {data?.pm25?.v || 'Unavailable'}</li>
        <li>PM10: {data?.pm10?.v || 'Unavailable'}</li>
        <li>Carbon Monoxide: {data?.co?.v || 'Unavailable'} </li>
        <li>Nitrogen Dioxide: {data?.no2?.v || 'Unavailable'}</li>
        <li>Ozone (Ground Level): {data?.o3?.v || 'Unavailable'}</li>
        <li>Sulfur Dioxide: {data?.so2?.v || 'Unavailable'}</li>
      </ul>
    </div>
  )
  
}

export default PollutantsData