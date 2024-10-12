import { BiCreditCard, BiMoney } from "react-icons/bi";
import { FormSection, PaymentButton, PaymentOptions, SectionSubtitle, SubSectionTitle } from "./styles";
import { BsBank } from "react-icons/bs";
import { addPaymentMethodAction, PaymentMethodType } from "../../../reducer/purchaseDetails/actions";
import { usePurchaseDetails } from "../../../context/PurchaseDetailsContext";

export function PaymentCoffeeSection() {
    const { purchaseDetails, dispatch } = usePurchaseDetails()
    const handlePaymentMethodChange = (method: PaymentMethodType) => {
        dispatch(addPaymentMethodAction(method))
    }
    return (
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
    )
}