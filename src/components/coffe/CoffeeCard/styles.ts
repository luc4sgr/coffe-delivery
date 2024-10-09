import styled from "styled-components"

export const Card = styled.div`
  padding: 20px;
  background-color: ${props => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  margin: 10px;
`

export const CoffeeImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -40px;
  margin-bottom: 12px;
`
export const Tags = styled.div`
    display: flex;
    gap: 8px;
`
export const Tag = styled.span`
  background-color:${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 100px;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 20px;
  color: ${props => props.theme["base-subtitle"]};
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme["base-label"]};
  margin-bottom: 33px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Price = styled.span`
  font-size: 14px;
  color: #574f4d;
  
  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 24px;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6e5e5;
  border-radius: 6px;
  padding: 8px;
  margin-right: 8px;
`

export const QuantityButton = styled.button`
  background: none;
  border: none;
  color: #8047f8;
  font-size: 16px;
  cursor: pointer;
`

export const Quantity = styled.span`
  color: #272221;
  padding: 0 8px;
`

export const CartButton = styled.button`
  background-color: #4b2995;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  `