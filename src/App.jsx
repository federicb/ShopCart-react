import { products as initialProducts } from "./mocks/products.json";
import "./App.css";
import { useState } from "react";
import { Products } from "./components/products";

function App() {
  const [products] = useState(initialProducts);
  return (
    <>
      <h1>ShopCart - React</h1>
      <Products products={products} />
    </>
  );
}

export default App;
