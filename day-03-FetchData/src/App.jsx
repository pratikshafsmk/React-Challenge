import { useEffect, useState } from "react";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("useEffect called 1");
    const fetchProduct = async () => {
      console.log("Fetching products...");
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log("Fetched products:", data);
        console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduct();

    // console.log(products);
  }, []);

  const searchProduct = (term) => {
    console.log("Search button clicked with term:", term);
    if (term.trim() === "") return;
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase()),
    );
    setProducts(filtered);  

    // Implement your search logic here
  };
  const uniqueCategory = [...new Set(products.map((p) => p.category))];

  
  return (
    <>
      <h1>Product List</h1>
      {/*Search product */}
      <div>
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <button
          style={{ border: "1px solid black", margin: "10px" }}
          onClick={() => searchProduct(searchTerm)}
        >
          Search
        </button>
      </div>
      {/*Filtering based on category*/}
      <div>
        <label>Filter</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {uniqueCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/*Dis[laying all products] */}
      <div className="products-container">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.thumbnail} alt={p.title} className="product-image" />
            <div className="product-title">{p.title}</div>
            <div className="product-description">{p.description}</div>
            <div className="product-price ">MPR: {p.price}</div>
            <div style={{ margin: "15px" }}>Rating: {p.rating}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
