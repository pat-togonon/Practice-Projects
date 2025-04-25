import AirQualityService from "./services/AirQuality"
import { useState, useEffect } from "react"
import SearchForm from "./components/searchForm"
import CityData from "./components/CityData"
import Header from "./components/Header"
import PollutantsData from "./components/Pollutants"
import WeatherData from "./components/Weather"
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState([])
  
  useEffect(() => {
    if (!city) {
      return
    }
    fetchData()
  }, [city])

  const fetchData = async () => {
    const dataForCity = await AirQualityService.getCity(city)
    setCityData(dataForCity)
  }

  console.log('city data is', cityData)
  console.log('city data status', cityData.status)

  const home = () => {
    return (
      <div>
      <Header />
      <SearchForm city={city} onChange={({ target }) => setCity(target.value)}/>
      {city ? <CityData cityData={cityData} city={city} /> : ''}
      </div>
    )
  }
  
  const padding = {
    padding: 5,
    textDecoration: 'none'
  }

  return (
    <div>
      <div>
        <Link style={padding} to='/'>Home</Link>
        <Link style={padding} to='/pollutants-report'>What's in your air</Link>
        <Link style={padding} to='/weather-report'>Weather</Link>
      </div>
      <Routes>
        <Route path='/' element={home()} />
        <Route path='/pollutants-report' element={<PollutantsData cityData={cityData} city={city} /> }/>
        <Route path='/weather-report' element={<WeatherData cityData={cityData} city={city} />} />
      </Routes>
    </div>
  )
}

export default App
