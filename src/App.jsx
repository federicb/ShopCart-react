import { products as initialProducts } from "./mocks/products.json";
import "./App.css";
import { useState } from "react";
import { Products } from "./components/Products";
import { Header } from "./components/Header";

export function useFilters() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all",
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, setFilters, filterProducts };
}

function App() {
  const [products] = useState(initialProducts);
  const { filters, setFilters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header filtersChange={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
