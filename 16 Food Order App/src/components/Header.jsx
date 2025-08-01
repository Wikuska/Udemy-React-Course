import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <div id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button">Cart({totalCartItems})</button>
    </div>
  );
}
