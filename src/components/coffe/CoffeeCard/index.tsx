import { useCoffee } from "../../../context/CoffeesContext"
import { Actions, Card, CartButton, CoffeeImage, Description, Footer, Price, Quantity, QuantityButton, QuantityControl, Tag, Tags, Title } from "./styles"
import { FaShoppingCart } from "react-icons/fa"
import { useCart } from "../../../context/CartContext"
import { addCoffee, updateQuantity, removeCoffee } from "../../../reducer/cart/actions"

interface CoffeeProps {
    id: string,
}

export function CoffeeCard(props: CoffeeProps) {
    const { id } = props
    const { coffees } = useCoffee()
    const { cartItems, dispatch } = useCart()

    const coffee = coffees.find(coffee => coffee.id === id)
    if (!coffee) {
        return <h1>Coffee not found</h1>
    }

    const coffeeInCart = cartItems.coffees.find(item => item.id === id)
    const currentQuantity = coffeeInCart?.quantity || 0

    const handleIncrementQuantity = () => {
        if (coffeeInCart) {
            dispatch(updateQuantity( coffee.id,currentQuantity + 1 ))
        } else {
            dispatch(addCoffee({ ...coffee, quantity: 1 }))
        }
    }

    const handleDecrementQuantity = () => {
        if (!coffeeInCart) return

        if (currentQuantity === 1) {
            dispatch(removeCoffee(coffee.id))
        } else {
            dispatch(updateQuantity(coffee.id, currentQuantity - 1))
        }
    }

    const addToCart = () => {
        if (!coffeeInCart) {
            dispatch(addCoffee({ ...coffee, quantity: 1 }))
        }
    }

    return (
        <Card>
            <CoffeeImage src={coffee.image} alt={coffee.name} />
            <Tags>
                {coffee.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
            </Tags>
            <Title>{coffee.name}</Title>
            <Description>{coffee.description}</Description>
            <Footer>
                <Price>R$ <strong>{coffee.price.toFixed(2)}</strong></Price>
                <Actions>
                    <QuantityControl>
                        <QuantityButton onClick={handleDecrementQuantity}>-</QuantityButton>
                        <Quantity>{currentQuantity}</Quantity>
                        <QuantityButton onClick={handleIncrementQuantity}>+</QuantityButton>
                    </QuantityControl>
                    <CartButton onClick={addToCart}>
                        <FaShoppingCart size={22} />
                    </CartButton>
                </Actions>
            </Footer>
        </Card>
    )
}