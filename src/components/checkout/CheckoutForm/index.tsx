import { BiCreditCard, BiMapPin, BiMinus, BiMoney, BiPlus } from "react-icons/bi"
import { BsBank, BsTrash2 } from "react-icons/bs"

import { Coffee } from "../../../context/CoffeesContext"
import { removeCoffee, updateQuantity } from "../../../reducer/cart/actions"
import {
    CoffeeActions, CoffeeDetails, CoffeeImage, CoffeeInfo, CoffeeItem, CoffeeName,
    CoffeePrice, ConfirmButton, FormContainer, FormSection, Input, InputGroup,
    PageContainer, PaymentButton, PaymentOptions, QuantityButton, QuantityControl,
    RemoveButton, SectionSubtitle, SectionTitle, SmallInput, SubSectionTitle,
    SummaryContainer, TotalAmount, TotalRow, TotalSection
} from "./styles"
import { usePurchaseDetails } from "../../../context/PurchaseDetailsContext"
import { useNavigate } from "react-router-dom"
import { RoutesEnum } from "../../../routes"
import { addPaymentMethodAction, PaymentMethodType } from "../../../reducer/purchaseDetails/actions"

export function CheckoutForm() {
    const {
        purchaseDetails,
        dispatch,
        cartItems,
        cartDispatch,
        addressUtils
    } = usePurchaseDetails()
    const navigate = useNavigate();
    const {
        address,
        isLoading,
        error,
        handleCepChange,
        handleAddressChange,
        validateAddress
    } = addressUtils

    const subtotal = cartItems.coffees.reduce((sum, coffee) => sum + coffee.price * coffee.quantity, 0)
    const deliveryFee = 3.50
    const total = subtotal + deliveryFee

    const handleIncreaseQuantity = (coffee: Coffee & { quantity: number }) => {
        cartDispatch(updateQuantity(coffee.id, coffee.quantity + 1))
    }

    const handleDecreaseQuantity = (coffee: Coffee & { quantity: number }) => {
        if (coffee.quantity === 1) {
            handleRemoveCoffee(coffee)
        } else {
            cartDispatch(updateQuantity(coffee.id, coffee.quantity - 1))
        }
    }

    const handleRemoveCoffee = (coffee: Coffee & { quantity: number }) => {
        cartDispatch(removeCoffee(coffee.id))
    }

    const handlePaymentMethodChange = (method: PaymentMethodType) => {
        dispatch(addPaymentMethodAction(method))
    }

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
        <PageContainer>
            <FormContainer>
                <SectionTitle>Complete seu pedido</SectionTitle>

                <FormSection>
                    <SubSectionTitle>
                        <BiMapPin color="#C47F17" />
                        Endereço de Entrega
                    </SubSectionTitle>
                    <SectionSubtitle>Informe o endereço onde deseja receber seu pedido</SectionSubtitle>

                    <InputGroup>
                        <SmallInput
                            type="text"
                            placeholder="CEP"
                            value={address.cep}
                            onChange={(e) => handleCepChange(e.target.value)}
                            maxLength={8}
                            disabled={isLoading}
                        />
                        {error && <span style={{ color: 'red', fontSize: '14px' }}>{error}</span>}

                        <Input
                            type="text"
                            placeholder="Rua"
                            value={address.street}
                            onChange={(e) => handleAddressChange('street', e.target.value)}
                        />
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <SmallInput
                                type="text"
                                placeholder="Número"
                                value={address.number}
                                onChange={(e) => handleAddressChange('number', e.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="Complemento"
                                value={address.complement}
                                onChange={(e) => handleAddressChange('complement', e.target.value)}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <SmallInput
                                type="text"
                                placeholder="Bairro"
                                value={address.neighborhood}
                                onChange={(e) => handleAddressChange('neighborhood', e.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="Cidade"
                                value={address.city}
                                onChange={(e) => handleAddressChange('city', e.target.value)}
                            />
                            <SmallInput
                                type="text"
                                placeholder="UF"
                                value={address.state}
                                onChange={(e) => handleAddressChange('state', e.target.value)}
                                style={{ maxWidth: '60px' }}
                                maxLength={2}
                            />
                        </div>
                    </InputGroup>
                </FormSection>

                <FormSection>
                    <SubSectionTitle>
                        <BiCreditCard color="#8047F8" style={{ color: "#8047F8" }} />
                        Pagamento
                    </SubSectionTitle>
                    <SectionSubtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SectionSubtitle>

                    <PaymentOptions>
                        <PaymentButton
                            isSelected={purchaseDetails.paymentMethod === PaymentMethodType.CREDIT_CARD}
                            onClick={() => handlePaymentMethodChange(PaymentMethodType.CREDIT_CARD)}
                        >
                            <BiCreditCard size={16} />
                            Cartão de crédito
                        </PaymentButton>
                        <PaymentButton
                            isSelected={purchaseDetails.paymentMethod === PaymentMethodType.DEBIT_CARD}
                            onClick={() => handlePaymentMethodChange(PaymentMethodType.DEBIT_CARD)}
                        >
                            <BsBank size={16} />
                            Cartão de débito
                        </PaymentButton>
                        <PaymentButton
                            isSelected={purchaseDetails.paymentMethod === PaymentMethodType.CASH}
                            onClick={() => handlePaymentMethodChange(PaymentMethodType.CASH)}
                        >
                            <BiMoney size={16} />
                            Dinheiro
                        </PaymentButton>
                    </PaymentOptions>
                </FormSection>
            </FormContainer>

            <SummaryContainer>
                <SectionTitle>Cafés selecionados</SectionTitle>
                <FormSection>
                    {cartItems.coffees.map(coffee => (
                        <CoffeeItem key={coffee.id}>
                            <CoffeeInfo>
                                <CoffeeImage src={coffee.image} alt={coffee.name} />
                                <CoffeeDetails>
                                    <CoffeeName>{coffee.name}</CoffeeName>
                                    <CoffeeActions>
                                        <QuantityControl>
                                            <QuantityButton onClick={() => handleDecreaseQuantity(coffee)}>
                                                <BiMinus size={14} />
                                            </QuantityButton>
                                            <span>{coffee.quantity}</span>
                                            <QuantityButton onClick={() => handleIncreaseQuantity(coffee)}>
                                                <BiPlus size={14} />
                                            </QuantityButton>
                                        </QuantityControl>
                                        <RemoveButton onClick={() => handleRemoveCoffee(coffee)}>
                                            <BsTrash2 size={16} />
                                            Remover
                                        </RemoveButton>
                                    </CoffeeActions>
                                </CoffeeDetails>
                            </CoffeeInfo>
                            <CoffeePrice>R$ {(coffee.price * coffee.quantity).toFixed(2)}</CoffeePrice>
                        </CoffeeItem>
                    ))}
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
            </SummaryContainer>
        </PageContainer>
    )
}