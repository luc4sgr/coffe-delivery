import { Address } from "../../hooks/useCep";
export enum PaymentMethodType {
    CREDIT_CARD = 'cartão de crédito',
    DEBIT_CARD = 'cartão de débito',
    CASH = 'dinheiro',
}
export type PaymentMethod =
    PaymentMethodType.CASH |
    PaymentMethodType.CREDIT_CARD |
    PaymentMethodType.DEBIT_CARD;

export enum PurchaseDetailsActionType {
    SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS',
    SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
    UPDATE_TOTAL = 'UPDATE_TOTAL',
}
export type PurchaseDetailsAction =
    | { type: PurchaseDetailsActionType.SET_DELIVERY_ADDRESS; payload: Address }
    | { type: PurchaseDetailsActionType.SET_PAYMENT_METHOD; payload: PaymentMethod }
    | { type: PurchaseDetailsActionType.UPDATE_TOTAL; payload: number };

export const addDeliveryAddressAction = (address: Address): PurchaseDetailsAction => ({
    type: PurchaseDetailsActionType.SET_DELIVERY_ADDRESS,
    payload: address,
});

export const addPaymentMethodAction = (paymentMethod: PaymentMethod): PurchaseDetailsAction => ({
    type: PurchaseDetailsActionType.SET_PAYMENT_METHOD,
    payload: paymentMethod,
});

export const updateTotalAction = (total: number): PurchaseDetailsAction => ({
    type: PurchaseDetailsActionType.UPDATE_TOTAL,
    payload: total,
});
