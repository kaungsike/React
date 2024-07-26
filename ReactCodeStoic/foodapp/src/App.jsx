import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";

const App = () => {
  const [foodData, setFoodData] = useState([]);

  console.log(foodData);

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
      <FoodList foodData={foodData}/>
      </Container>
    </div>
  );
};

export default App;
