import { Address } from "../../hooks/useCep";
import { PaymentMethod, PurchaseDetailsAction } from "./actions";


export interface PurchaseDetailsState {
    deliveryAddress: Address;
    paymentMethod: PaymentMethod | null;
    total: number;
}

export function purchaseDetailsReducer(state: PurchaseDetailsState, action: PurchaseDetailsAction): PurchaseDetailsState {
    switch (action.type) {
        case 'SET_DELIVERY_ADDRESS':
            return { ...state, deliveryAddress: action.payload };
        case 'SET_PAYMENT_METHOD':
            return { ...state, paymentMethod: action.payload };
        case 'UPDATE_TOTAL':
            return { ...state, total: action.payload };
        default:
            return state;
    }
}