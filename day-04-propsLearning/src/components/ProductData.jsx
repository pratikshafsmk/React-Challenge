const ProductData = ({ url, name, size }) => {
  return (
    <>
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        <img src={url} alt={name} width={size} height={size} />
        <h3>{name}</h3>
      </div>
    </>
  );
};

export default ProductData;
