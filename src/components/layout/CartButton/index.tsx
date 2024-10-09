import { CgShoppingCart } from "react-icons/cg";
import { AmountItems, CartButtonContainer } from "./styles";
import { useCart } from "../../../context/CartContext";

export function CartButton() {

    const { cartItems } = useCart()
    const amountItems = cartItems.coffees.reduce((acc, coffee) => acc + coffee.quantity, 0)

    return (
        <CartButtonContainer>
            <CgShoppingCart size={22} />
            {
                amountItems > 0 && <AmountItems>{amountItems}</AmountItems>
            }
        </CartButtonContainer>
    )
}