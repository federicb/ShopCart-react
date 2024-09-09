import { Filters } from "./Filters";

export function Header({ filtersChange }) {
  return (
    <header>
      <h1>ShopCart - React</h1>
      <Filters onChange={filtersChange} />
    </header>
  );
}
