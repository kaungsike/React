import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({foodData}) => {
  return (
    <div className="">
      {foodData.map((data) =>
      <FoodItem key={data.id} foodData={data}/>
      )}
    </div>
  );
};

export default FoodList;
