import { useId, useState } from "react";
import "./Filters.css";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);

  const priceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor="priceFilterId">Precio</label>
        <input
          type="range"
          id="priceFilterId"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={minPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="categoryFilterId">Categoria</label>
        <select id="categoryFilterId" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="beauty">Belleza</option>
          <option value="fragrances">Fragancias</option>
          <option value="groceries">Alimentos</option>
          <option value="furniture">Muebles</option>
        </select>
      </div>
    </section>
  );
}
