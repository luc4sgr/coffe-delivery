import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { cartReducer, CartState } from '../reducer/cart/reducer';
import { addMultipleCoffees, CartAction } from '../reducer/cart/actions';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext<{
    cartItems: CartState;
    dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, { coffees: [] });
    const [savedCartItems, setSavedCartItems] = useLocalStorage('@kafe:cartItems', cartItems);

    useEffect(() => {
        if (savedCartItems.coffees.length > 0) {
            dispatch(addMultipleCoffees(savedCartItems.coffees));
        }
    }, []);

    useEffect(() => {
        setSavedCartItems(cartItems);
    }, [cartItems, setSavedCartItems]);
    return (
        <CartContext.Provider value={{ cartItems, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };