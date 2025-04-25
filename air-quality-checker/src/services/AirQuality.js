import axios from "axios"

const baseUrl = 'https://api.waqi.info/feed'

const TOKEN = import.meta.env.VITE_TOKEN

const getCity = async (city) => {
  
  const response = await axios.get(`${baseUrl}/${city.toLowerCase()}/?token=${TOKEN}`)

  return response.data
}

export default { getCity }