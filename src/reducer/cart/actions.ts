export interface Coffee {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  tags: string[];
}

export enum CartActionType {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  ADD_MULTIPLE_COFFEES = 'ADD_MULTIPLE_COFFEES',
}

interface AddCoffeeAction {
  type: CartActionType.ADD_COFFEE;
  payload: Coffee;
}
interface AddMultipleCoffeesAction {
  type: CartActionType.ADD_MULTIPLE_COFFEES;
  payload: Coffee[];
}

interface RemoveCoffeeAction {
  type: CartActionType.REMOVE_COFFEE;
  payload: { id: string };
}

interface UpdateQuantityAction {
  type: CartActionType.UPDATE_QUANTITY;
  payload: { id: string; quantity: number };
}

export type CartAction =
  AddCoffeeAction |
  RemoveCoffeeAction |
  UpdateQuantityAction |
  AddMultipleCoffeesAction

export const addCoffee = (coffee: Coffee): AddCoffeeAction => ({
  type: CartActionType.ADD_COFFEE,
  payload: coffee,
});

export const removeCoffee = (id: string): RemoveCoffeeAction => ({
  type: CartActionType.REMOVE_COFFEE,
  payload: { id },
});

export const updateQuantity = (id: string, quantity: number): UpdateQuantityAction => ({
  type: CartActionType.UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const addMultipleCoffees = (coffees: Coffee[]): AddMultipleCoffeesAction => ({
  type: CartActionType.ADD_MULTIPLE_COFFEES,
  payload: coffees,
});