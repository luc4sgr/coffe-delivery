import styled from "styled-components"

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