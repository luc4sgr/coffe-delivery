

import { useCoffee } from "../../../context/CoffeesContext";
import { Container } from "./styles";
import { CoffeeCard } from "../CoffeeCard";

export function CoffeList() {
    const { coffees } = useCoffee();
    return (
        <Container>
            {
                coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} id={coffee.id} />
                ))
            }
        </Container>
    )
}