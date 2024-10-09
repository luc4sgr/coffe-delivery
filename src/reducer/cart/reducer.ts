import { CartAction, CartActionType } from "./actions";

interface Coffee {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    tags: string[];
    quantity: number;
}

export interface CartState {
    coffees: Coffee[];
}


export const cartReducer = (state: CartState, action: CartAction): CartState => {
    console.log(action);
    switch (action.type) {
        case CartActionType.ADD_COFFEE:
            return { ...state, coffees: [...state.coffees, action.payload] };
        case CartActionType.REMOVE_COFFEE:
            return {
                ...state,
                coffees: state.coffees.filter(coffee => coffee.id !== action.payload.id),
            };
        case CartActionType.UPDATE_QUANTITY:
            return {
                ...state,
                coffees: state.coffees.map(coffee =>
                    coffee.id === action.payload.id
                        ? { ...coffee, quantity: action.payload.quantity }
                        : coffee
                ),
            };
        case CartActionType.ADD_MULTIPLE_COFFEES:
            return {
                ...state,
                coffees:action.payload
                
            };
        default:
            throw new Error(`Unhandled action type: ${action}`);
    }
};