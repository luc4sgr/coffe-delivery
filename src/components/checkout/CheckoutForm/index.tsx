
import { FormContainer, PageContainer, SummaryContainer } from "./styles"
import { PaymentCoffeeSection } from "./PaymentCoffeeSection"
import { DeliveryInfoSection } from "./DeliveryInfoSection"
import { SelectedCoffeeSection } from "./SelectedCofeeSection"

export function CheckoutForm() {

    return (
        <PageContainer>
            <FormContainer>
                <DeliveryInfoSection />
                <PaymentCoffeeSection />
            </FormContainer>

            <SummaryContainer>
                <SelectedCoffeeSection />
            </SummaryContainer>
        </PageContainer>
    )
}