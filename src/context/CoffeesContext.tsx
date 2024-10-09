import React, { createContext, useState, ReactNode, useContext } from 'react';
import { coffeeList } from '../core/contants/coffeList';

export interface Coffee {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    tags: string[];
}

interface CoffeesContextType {
    coffees: Coffee[];
}

const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesProviderProps {
    children: ReactNode;
}

const CoffeesProvider: React.FC<CoffeesProviderProps> = ({ children }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [coffees, _] = useState<Coffee[]>(coffeeList);


    return (
        <CoffeesContext.Provider value={{ coffees }}>
            {children}
        </CoffeesContext.Provider>
    );
};

const useCoffee = () => {
    const context = useContext(CoffeesContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CoffeesProvider, useCoffee };
