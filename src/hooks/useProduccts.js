import { useEffect, useState } from "react";

export function useProducts() {
  const [initialProducts, setInitialProducts] = useState([]);
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

  return { initialProducts };
}
