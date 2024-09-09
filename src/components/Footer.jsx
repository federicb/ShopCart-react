import { useCart } from "../hooks/useCart";
import "./Footer.css";

export function Footer() {
  const { cart } = useCart();
  return (
    <footer className="footer">
      {JSON.stringify(cart, 2, null)}
      {/* <h4>
        Cartito - React ⚛️ - <span> @federicb</span>
      </h4>
      <h5>Shopping Cart</h5> */}
    </footer>
  );
}
