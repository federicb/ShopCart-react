// import { products as initialProducts } from "./mocks/products.json";
import "./App.css";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";
import { useEffect, useState } from "react";

function App() {
  const [initialProducts, setInitialProducts] = useState([]);
  const { filterProducts } = useFilters();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const { products } = data;
        setInitialProducts(products);
      })
      .catch((error) => {
        console.log("Error fetch productos:", error);
      });
  }, []);

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
