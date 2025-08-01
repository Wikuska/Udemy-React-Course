import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="meal picture" />
        <h3>{meal.name}</h3>
        <div className="meal-item-actions">
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <button className="button" onClick={handleAddMealToCart}>
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}
