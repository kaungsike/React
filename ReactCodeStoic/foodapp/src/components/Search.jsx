import React, { useState ,useEffect} from "react";

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = "fa3f21106d35434db3ba5f6de381b0ff";


const Search = () => {
  const [query, setQuery] = useState("pizza");
  
  useEffect(() => {
     async function fetchFood () {
       const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
       const data = await response.json()
       console.log(data)
    }
    fetchFood();
  },[query])

  return (
    <div>
      <input
        value={query}
        className="border outline-none"
        type="text"
        name=""
        id=""
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
