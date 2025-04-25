import { aqiStyle } from "../styles/LevelStyle"

const CityData = ({ cityData, city }) => {
  console.log('city data props', cityData)
  
  if (city === '') {
    return null
  }

  if (cityData.status === 'error') {
    return <div>City is not found. Please try another city.</div>
  }

 if (cityData.data?.aqi === '-') {
    return <div>Air quality data is not available. Please try another city</div>
  }

  const rawDate = cityData?.data?.debug?.sync
  const date = new Date(rawDate)

  const formattedDate = date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
  
  const { style, legendStyle, note } = aqiStyle(cityData?.data)

  return (
    <div>
      <h2>{cityData?.data?.city.name}</h2>
      <p>Air Quality Index: </p>
      <p style={style}>
        {cityData?.data?.aqi}
      </p>
      <p style={legendStyle}>{note}</p>
      <p>As of {formattedDate} </p>
    </div>
  )
  
}

export default CityData