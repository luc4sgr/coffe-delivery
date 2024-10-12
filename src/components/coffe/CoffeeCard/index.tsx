import { Coffee } from "../../../context/CoffeesContext"
import { CoffeeQuantityControl } from "../../common/CoffeQuantityControl"
import { Actions, Card, CartButton, CoffeeImage, Description, Footer, Price, Tag, Tags, Title } from "./styles"
import { FaShoppingCart } from "react-icons/fa"

export function CoffeeCard(coffee: Coffee) {

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
                    <CoffeeQuantityControl id={coffee.id} />
                    <CartButton >
                        <FaShoppingCart size={22} />
                    </CartButton>
                </Actions>
            </Footer>
        </Card>
    )
}
