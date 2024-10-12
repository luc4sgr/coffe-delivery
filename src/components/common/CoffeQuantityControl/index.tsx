import { useCart } from "../../../context/CartContext";
import { addCoffee, removeCoffee, updateQuantity } from "../../../reducer/cart/actions";
import { Quantity, QuantityButton, QuantityControl } from "./styles";

interface CoffeeQuantityControlProps {
    id: string;
}
export function CoffeeQuantityControl({ id }: CoffeeQuantityControlProps) {
    const { cartItems, dispatch } = useCart()
    const coffeeInCart = cartItems.coffees.find(item => item.id === id)
    const currentQuantity = coffeeInCart?.quantity || 0

    const handleIncrementQuantity = () => {
        if (coffeeInCart) {
            dispatch(updateQuantity(id, currentQuantity + 1))
        } else {
            dispatch(addCoffee(id, 1))
        }
    }


    const handleDecrementQuantity = () => {
        if (!coffeeInCart) return

        if (currentQuantity === 1) {
            dispatch(removeCoffee(id))
        } else {
            dispatch(updateQuantity(id, currentQuantity - 1))
        }
    }

    return (
        <QuantityControl>
            <QuantityButton onClick={handleDecrementQuantity}>-</QuantityButton>
            <Quantity>{currentQuantity}</Quantity>
            <QuantityButton onClick={handleIncrementQuantity}>+</QuantityButton>
        </QuantityControl>
    )
}