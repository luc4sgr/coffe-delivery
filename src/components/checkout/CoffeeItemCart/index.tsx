import { CoffeeActions, CoffeeDetails, CoffeeImage, CoffeeInfo, CoffeeItem, CoffeeName, CoffeePrice, RemoveButton } from "./styles";
import { BsTrash2 } from "react-icons/bs";
import { useCoffee } from "../../../context/CoffeesContext";
import { CoffeeQuantityControl } from "../../common/CoffeQuantityControl";
import { useCart } from "../../../context/CartContext";
import { removeCoffee } from "../../../reducer/cart/actions";
interface CoffeeItemInCartProps {
    id: string;
    quantity: number;
}
export function CoffeeItemInCart({ id, quantity }: CoffeeItemInCartProps) {
    const { coffees } = useCoffee()
    const { dispatch } = useCart()

    const handleRemoveCoffee = () => {
        dispatch(removeCoffee(id))
    }

    const coffee = coffees.find(coffee => coffee.id === id)
    if (!coffee) return null
    return (
        <CoffeeItem >
            <CoffeeInfo>
                <CoffeeImage src={coffee.image} alt={coffee.name} />
                <CoffeeDetails>
                    <CoffeeName>{coffee.name}</CoffeeName>
                    <CoffeeActions>
                        <CoffeeQuantityControl id={coffee.id} />
                        <RemoveButton onClick={handleRemoveCoffee}>
                            <BsTrash2 size={16} />
                            Remover
                        </RemoveButton>
                    </CoffeeActions>
                </CoffeeDetails>
            </CoffeeInfo>
            <CoffeePrice>R$ {(coffee.price * quantity).toFixed(2)}</CoffeePrice>
        </CoffeeItem>
    )
}