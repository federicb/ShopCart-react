import { products as initialProducts } from "./mocks/products.json";
import "./App.css";
import { useState } from "react";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);
  const { filters, setFilters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
