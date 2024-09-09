export function CartItem({
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  decreaseQuantity,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}€
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={decreaseQuantity}>-</button>
      </footer>
    </li>
  );
}
