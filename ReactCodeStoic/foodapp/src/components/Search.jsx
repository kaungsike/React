import React, { useState, useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "fa3f21106d35434db3ba5f6de381b0ff";

const Search = ({foodData,setFoodData}) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchFood()
  }, [query]);

  return (
    <div className="border mb-4 py-4 flex items-center justify-center">
      <input
        value={query}
        className="border outline-none px-2 py-1 text-lg rounded-md"
        type="text"
        name=""
        id=""
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
