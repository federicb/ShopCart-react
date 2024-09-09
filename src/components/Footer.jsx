// import { useCart } from "../hooks/useCart";
import "./Footer.css";

export function Footer() {
  // const { cart } = useCart();
  return (
    <footer className="footer">
      {/* {JSON.stringify(cart, 2, null)} */}
      <h4>
        ShopCart - React ⚛️ |&nbsp;
        <a href="https://github.com/federicb/ShopCart-react/tree/main">
          federicb
        </a>
      </h4>

      <h5>Shopping Cart</h5>
    </footer>
  );
}
