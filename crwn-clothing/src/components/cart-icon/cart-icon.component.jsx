import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  // This was my way. But with Context way is more better I think.
  //   const totalCartItemQuantity = cartItems.reduce(
  //     (acc, val) => acc + val.quantity,
  //     0
  //   );

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
