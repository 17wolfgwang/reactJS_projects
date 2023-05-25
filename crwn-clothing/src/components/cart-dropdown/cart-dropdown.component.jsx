import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
