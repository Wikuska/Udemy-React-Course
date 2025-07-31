export default function MealItem({
  meal: { name, price, description, image },
}) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="meal picture" />
        <h3>{name}</h3>
        <div className="meal-item-actions">
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
          <button className="button">Add to Cart</button>
        </div>
      </article>
    </div>
  );
}
