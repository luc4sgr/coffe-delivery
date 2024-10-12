import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { usePurchaseDetails } from "../../../context/PurchaseDetailsContext";
import { useCep } from "../../../hooks/useCep";
import { ListOfCoffeesInCart } from "../ListOfCoffeesInCart";
import { ConfirmButton, FormSection, SectionTitle, TotalAmount, TotalRow, TotalSection } from "./styles";
import { useCoffee } from "../../../context/CoffeesContext";
import { RoutesEnum } from "../../../routes";

export function SelectedCoffeeSection() {
    const navigate = useNavigate()
    const { coffees } = useCoffee()
    const { cartItems } = useCart()
    const { purchaseDetails } = usePurchaseDetails()
    const { validateAddress } = useCep()
    console.log(cartItems?.coffees)
    const coffeesInCart = coffees.filter(coffee => cartItems.coffees?.some(item => item.id === coffee.id))

    const subtotal = coffeesInCart.reduce((sum, coffee) => sum + coffee.price * (cartItems.coffees.find(item => item.id === coffee.id)?.quantity || 0), 0)

    const deliveryFee = 3.50
    const total = subtotal + deliveryFee


    const handleConfirmOrder = () => {
        if (!validateAddress()) {
            alert('Por favor, preencha todos os campos obrigatórios do endereço')
            return
        }

        if (!purchaseDetails.paymentMethod) {
            alert('Por favor, selecione um método de pagamento')
            return
        }
        navigate(RoutesEnum.ORDER_INFORMATION)
    }
    return (
        <FormSection>
            <SectionTitle>Cafés selecionados</SectionTitle>
            <ListOfCoffeesInCart list={cartItems.coffees} />
            <TotalSection>
                <TotalRow>
                    <span>Total de itens</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                </TotalRow>
                <TotalRow>
                    <span>Entrega</span>
                    <span>R$ {deliveryFee.toFixed(2)}</span>
                </TotalRow>
                <TotalAmount>
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                </TotalAmount>
            </TotalSection>
            <ConfirmButton onClick={handleConfirmOrder}>
                Confirmar pedido
            </ConfirmButton>
        </FormSection>
    )
}