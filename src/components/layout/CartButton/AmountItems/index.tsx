import { useCart } from "../../../../context/CartContext"
import { AmountItemsContainer } from "./styles"

export function AmountItems() {
    const { cartItems } = useCart()
    const amountItems = cartItems.coffees.reduce((acc, coffee) => acc + coffee.quantity, 0)

    return (
        <>
            {
                amountItems > 0 && <AmountItemsContainer>{amountItems} </AmountItemsContainer>
            }
        </>
    )

}