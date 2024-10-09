import styled from "styled-components";

export const CartButtonContainer = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border: none;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`


export const AmountItems = styled.div`
    position: absolute;
    top: -0.8rem;
    right: -0.5rem;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['white']};
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`