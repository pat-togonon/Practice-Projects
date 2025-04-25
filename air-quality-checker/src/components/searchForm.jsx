
const SearchForm = ({ city, onChange }) => {
  
  return (
    <input 
      type="text" 
      value={city} 
      onChange={onChange} 
      placeholder="enter city to check air quality"
    />      
  )  
}

export default SearchForm