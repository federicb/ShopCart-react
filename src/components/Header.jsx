import { Filters } from "./Filters";

export function Header() {
  return (
    <header>
      <section>
        {/* <img src="../assets/icon.webp" alt="ShopCart icon" /> */}
        <h1>ShopCart - React</h1>
      </section>
      <Filters />
    </header>
  );
}
