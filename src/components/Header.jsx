import { Filters } from "./Filters";

export function Header() {
  return (
    <header>
      <section>
        {/* <img src="../assets/icon.webp" alt="ShopCart icon" /> */}
        <h1 style={{color: "#333"}}>ShopCart - React</h1>
      </section>
      <Filters />
    </header>
  );
}
