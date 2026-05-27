import React from "react";
const DishCard = ({ bigRecipes, increaseCartValue }) => {
  console.log("DishCard component rendered");
  return (
    <div className="card">
      <img className="card-img" src={bigRecipes.image} />
      <div className="card-body">
        <h3>{bigRecipes.name}</h3>
        <p>🍴 Cuisinie :{bigRecipes.cuisine}</p>
        <p>
          ⭐Rating:{bigRecipes.rating}({bigRecipes.reviewCount} reviews){" "}
        </p>
        <button onClick={increaseCartValue}>Add to Cart</button>
      </div>
    </div>
  );
};
export default React.memo(DishCard);
