import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

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
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
