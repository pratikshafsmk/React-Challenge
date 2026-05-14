import { useState } from "react";
import { recipesData } from "../../utility/constants";
import DishCard from "./DishCard";

const RecipeFilterApp = () => {
  const [filterValue, setFilterValue] = useState(4.0);
  const [cartCount, setCartCount] = useState(0);
  const increaseCartValue = () => {
    setCartCount((prev) => prev + 1);
  };

  const filteredRating = recipesData.filter(
    (dishRate) => dishRate.rating >= filterValue,
  );

  const avgRating = filteredRating.reduce((acc, curr) => acc + curr.rating, 0);

  return (
    <div className="top-bar">
      <div>
        <h1 style={{ textAlign: "center", padding: "10px" }}>🍽️ Menue 🍽️</h1>
        <div className="filter-section">
          <label htmlFor="filter">Filter by Rating: </label>
          <select
            id="filter"
            name="filterByRate"
            value={filterValue}
            onChange={(e) => setFilterValue(Number(e.target.value))}
          >
            <option value="4.0">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
          <div className="cart-section"> 🛒 Cart Items: {cartCount}</div>
        </div>
      </div>

      <h2>
        Average Rating: {(avgRating / filteredRating.length).toFixed(2)} (
        {filteredRating.length}recepies)
      </h2>

      <div className="recipe-container">
        {filteredRating.map((dish) => (
          <DishCard
            key={dish.id}
            recipesData={dish}
            increaseCartValue={increaseCartValue}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
