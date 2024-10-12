import { Coffee } from "../../../reducer/cart/actions";
import { CoffeeItemInCart } from "../CoffeeItemCart";
interface ListOfCoffeesInCartProps {
    list: Coffee[]
}
export function ListOfCoffeesInCart({ list }: ListOfCoffeesInCartProps) {
    return (
        <>
            {list.map(coffee => (
                <CoffeeItemInCart key={coffee.id} id={coffee.id} quantity={coffee.quantity} />
            ))}
        </>
    )
}