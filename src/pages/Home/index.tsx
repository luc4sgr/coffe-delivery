import { CoffeList } from "../../components/coffe/CoffeList";
import { Container } from "./styles";

export function Home() {
    return (
    <Container>
        <h1>Nossos cafés</h1>
        <CoffeList />
    </Container>
    )
}