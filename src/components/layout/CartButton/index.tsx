import { CgShoppingCart } from "react-icons/cg";
import { CartButtonContainer } from "./styles";
import { AmountItems } from "./AmountItems";

export function CartButton() {

    return (
        <CartButtonContainer>
            <CgShoppingCart size={22} />
            <AmountItems />
        </CartButtonContainer>
    )
}