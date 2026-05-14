const DishCard = ({ recipesData, increaseCartValue }) => {
  return (
    <div style={{ border: "1px solid black" }} className="card">
      <div>
        <img
          className="card-img"
          style={{ width: "50px", height: "50px" }}
          src={recipesData.image}
        />
      </div>
      <h3>{recipesData.name}</h3>
      <p>🍴 Cuisinie :{recipesData.cuisine}</p>
      <p>
        ⭐Rating:{recipesData.rating}({recipesData.reviewCount} reviews){" "}
      </p>
      <button onClick={increaseCartValue}>Add to Cart</button>
    </div>
  );
};
export default DishCard;
