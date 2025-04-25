// For general AQI, then the 5 pollutants

// For Air Quality Index
export const aqiStyle = (props) => {
  
  if (!props?.aqi) {
    return {
      style: null,
      legendStyle: null
    }
  }

  const styles = [
    { max: 50, color: 'green', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Good air quality'},
    { max: 100, color: 'yellow', backgroundColor: 'black', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Moderate air quality'},
    { max: 150, color: 'orange', backgroundColor: 'black', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Unhealthy for sensitive groups' },
    { max: 200, color: 'red', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Unhealthy air quality' },
    { max: 300, color: 'purple', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Very unhealthy air quality' },
    { max: Infinity, color: 'maroon', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Hazardous air quality' },
  ]
  
  const styling = styles.find(style => style.max >= props.aqi)
  
  console.log('note is', styling.note)
  return {
   
    style: { color: styling.color,
      fontWeight: 'bold',
      fontSize: '2.5rem',
      padding: '0',
      backgroundColor: styling.backgroundColor,
      width: styling.width,
      maxWidth: styling.maxWidth,
      textAlign: styling.textAlign
    }, 
    legendStyle: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: styling.color,
      backgroundColor: styling.backgroundColor,
      width: styling.width,
      maxWidth: styling.maxWidth,
      textAlign: styling.textAlign
    },
    note: styling.note 
  }
}

export const ozoneStyle = (props) => {

  if (!props.data) {
    return {}
  }

  const styles = [
    { max: 0.054, color: 'green', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Good air quality'},
    { max: 0.07, color: 'yellow', backgroundColor: 'black', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Moderate air quality'},
    { max: 0.085, color: 'orange', backgroundColor: 'black', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Unhealthy for sensitive groups' },
    { max: 0.105, color: 'red', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Unhealthy air quality' },
    { max: 0.2, color: 'purple', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Very unhealthy air quality' },
    { max: Infinity, color: 'maroon', backgroundColor: 'white', width: '100%', maxWidth: '20%', textAlign: 'center', note: 'Hazardous air quality' },
  ]
  
  const styling = styles.find(style => style.max >= props.aqi)
  
  console.log('note is', styling.note)


}