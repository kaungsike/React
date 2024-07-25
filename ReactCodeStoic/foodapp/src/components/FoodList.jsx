import React from "react";

const FoodList = ({foodData}) => {
  return (
    <div>
      {" "}
      {foodData.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.title}</p>
            <img src={data.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
