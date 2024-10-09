import styled from "styled-components"

export const PageContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  gap: 32px;
`

export const FormContainer = styled.div`
  flex: 1;
`

export const SummaryContainer = styled.div`
  width: 448px;
`

export const FormSection = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;
  border-top-right-radius:36px;
  border-bottom-left-radius:36px;

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
    background-color: ${(props) => props.theme['purple-light']};
  }
`

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 16px;
`

export const SubSectionTitle = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SectionSubtitle = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 32px;
`

export const InputGroup = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  font-size: 14px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const SmallInput = styled(Input)`
  max-width: 200px;
`

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

export const PaymentButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background-color: ${props => props.isSelected ? props.theme['purple-light'] : props.theme['base-button']};
  border: ${props => props.isSelected ? `1px solid ${props.theme['purple']}` : `1px solid ${props.theme['base-button']}`};
  border-radius: 6px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.isSelected ? props.theme['purple-light'] : props.theme['base-hover']};
  }
`

export const CoffeeItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 20px;
`

export const CoffeeImage = styled.img`
  width: 64px;
  height: 64px;
`

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CoffeeName = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 16px;
`

export const CoffeeActions = styled.div`
  display: flex;
  gap: 8px;
`

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 8px;
`

export const QuantityButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme['purple']};
  cursor: pointer;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const CoffeePrice = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
`

export const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme['base-text']};
  font-size: 14px;
`

export const TotalAmount = styled(TotalRow)`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`