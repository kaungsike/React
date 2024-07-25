import React, { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList';

const App = () => {

  const [foodData,setFoodData] = useState([]);
  console.log(foodData)

  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <FoodList foodData={foodData}/>
    </div>
  )
}

export default App