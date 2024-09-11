import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import { useEffect, useRef, useState } from "react";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const [visibleProducts, setVisibleProducts] = useState(15);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const handleObserver = (entries) => {
      const target = entries[0];
      if (
        target.isIntersecting &&
        !loading &&
        visibleProducts < products.length
      ) {
        setLoading(true);
        setTimeout(() => {
          setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
          setLoading(false);
        }, 1000);
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver);
    const sentinela = document.querySelector("#sentinela");
    if (sentinela) {
      observerRef.current.observe(sentinela);
    }

    return () => {
      if (sentinela) {
        return observerRef.current.unobserve(sentinela);
      }
    };
  }, [loading, visibleProducts, products.length]);

  const checkIsProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.slice(0, visibleProducts).map((product) => {
          const isProductInCart = checkIsProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - {product.price}€
              </div>
              <div>
                <button
                  className={isProductInCart ? "in-cart" : ""}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div id="sentinela"></div>
      {loading && <p>Cargando más productos...</p>}
    </main>
  );
}
