import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { useCart } from './CartContext';
import { useCep } from '../hooks/useCep';
import { purchaseDetailsReducer, PurchaseDetailsState } from '../reducer/purchaseDetails/reducer';
import { addDeliveryAddressAction, PurchaseDetailsAction, updateTotalAction } from '../reducer/purchaseDetails/actions';
import { useCoffee } from './CoffeesContext';



interface PurchaseDetailsContextType {
  purchaseDetails: PurchaseDetailsState;
  dispatch: React.Dispatch<PurchaseDetailsAction>;
  cartItems: ReturnType<typeof useCart>['cartItems'];
  cartDispatch: ReturnType<typeof useCart>['dispatch'];
  addressUtils: ReturnType<typeof useCep>;
}

const PurchaseDetailsContext = createContext<PurchaseDetailsContextType | undefined>(undefined);

export const PurchaseDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { cartItems, dispatch: cartDispatch } = useCart();
  const { coffees } = useCoffee();
  const addressUtils = useCep();

  
  const [purchaseDetails, dispatch] = useReducer(purchaseDetailsReducer, {
    deliveryAddress: addressUtils.address,
    paymentMethod: null,
    total: 0,
  });

  useEffect(() => {
    // if(coffees.length > 0 && cartItems.coffees.length > 0) {
    //   const cofeesInCart = coffees?.filter(coffee => cartItems.coffees.some(item => item.id === coffee.id));
    //   const total = cofeesInCart.reduce((acc, item) => acc + item.price * (cartItems.coffees.find(cartItem => cartItem.id === item.id)?.quantity || 0), 0);
    //   dispatch(updateTotalAction(total));

    // }
    // const cofeesInCart = coffees?.filter(coffee => cartItems.coffees.some(item => item.id === coffee.id));
    // const total = cofeesInCart.reduce((acc, item) => acc + item.price * (cartItems.coffees.find(cartItem => cartItem.id === item.id)?.quantity || 0), 0);
    // // const total = cartItems.coffees.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // dispatch(updateTotalAction(total));
  }, [cartItems]);

  useEffect(() => {
    dispatch(addDeliveryAddressAction(addressUtils.address));
  }, [addressUtils.address]);

  return (
    <PurchaseDetailsContext.Provider
      value={{
        purchaseDetails,
        dispatch,
        cartItems,
        cartDispatch,
        addressUtils,
      }}
    >
      {children}
    </PurchaseDetailsContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const usePurchaseDetails = () => {
  const context = useContext(PurchaseDetailsContext);
  if (context === undefined) {
    throw new Error('usePurchaseDetails must be used within a PurchaseDetailsProvider');
  }
  return context;
};