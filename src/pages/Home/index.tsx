import { CoffeList } from "../../components/coffe/CoffeList";
import { Container } from "./styles";
import Hero from '../../assets/Intro.svg'
export function Home() {
    return (
    <Container>
        <img src={Hero} alt="Hero"  />
        <h1>Nossos cafés</h1>
        <CoffeList />
    </Container>
    )
}