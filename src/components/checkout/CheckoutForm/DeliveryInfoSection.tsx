import { BiMapPin } from "react-icons/bi";
import { FormSection, Input, InputGroup, SectionSubtitle, SectionTitle, SmallInput, SubSectionTitle } from "./styles";
import { usePurchaseDetails } from "../../../context/PurchaseDetailsContext";

export function DeliveryInfoSection() {
  const {
    addressUtils
  } = usePurchaseDetails()

  const {
    address,
    isLoading,
    error,
    handleCepChange,
    handleAddressChange,
  } = addressUtils
  return (
    <FormSection>
      <SectionTitle>Complete seu pedido</SectionTitle>
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
  )
}