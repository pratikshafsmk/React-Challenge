import { useCallback, useMemo, useState } from "react";
import { bigRecipes } from "../../utility/constants";
import DishCard from "./DishCard";
import { FixedSizeList } from "react-window";


const Row = ({ index, style,data }) => {
  const recipe = data[index];

  return (
    <div style={style}>
      <h3>{recipe.title}</h3>
    </div>
  );
};

const RecipeFilterApp = () => {

  console.log("RecipeFilterApp component rendered");
  const [filterValue, setFilterValue] = useState(4.0);
  const [cartCount, setCartCount] = useState(0);

  const increaseCartValue = useCallback(() => {
    setCartCount((prev) => prev + 1);
    console.log("prop as function ,Cart count increased:");
  }, []);

  const filteredRating = useMemo(() => {
    console.log(
      "Filter function called. Filtered dishes based on rating:",
      filterValue,
    );
    const filteredDishes = bigRecipes.filter(
      (dishRate) => dishRate.rating >= filterValue,
    );
    const totalRating = filteredDishes.reduce(
      (acc, curr) => acc + curr.rating,
      0,
    );
    const avgRating =
      filteredDishes.length > 0 ? totalRating / filteredDishes.length : 0;

    return {
      filterDish: filteredDishes,
      avgRate: avgRating,
    };
  }, [filterValue]);

  //console.log("Reduce function called. Average rating:", avgRating);

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
        Average Rating: {filteredRating.avgRate.toFixed(2)} (
        {filteredRating.filterDish.length} recipes)
      </h2>

      <div className="recipe-container">
        {filteredRating.filterDish.map((dish) => (
          <DishCard
            key={dish.id}
            bigRecipes={dish}
            increaseCartValue={increaseCartValue}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
