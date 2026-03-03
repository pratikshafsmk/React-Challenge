import ProductData from "./ProductData";
import { personObject } from "../Constant/personObject";
const style = {
  // margin: "50px",
  // padding: "20px",
  display: "flex",
  gap: "20px",
};

const ProductCard = () => {
  return (
    <>
      <div style={style}>
        {personObject.map((p, index) => (
          <ProductData key={index} url={p.url} name={p.name} size={p.size} />
        ))}{" "}
      </div>
    </>
  );
};

export default ProductCard;
