"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ProductContextType {
    quantities: { [key: number]: number };
    handleIncrement: (productId: number) => void;
    handleDecrement: (productId: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    const handleIncrement = (productId: number) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1,
        }));
    };

    const handleDecrement = (productId: number) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
        }));
    };

    return (
        <ProductContext.Provider value={{ quantities, handleIncrement, handleDecrement }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext debe ser usado dentro de un ProductProvider');
    }
    return context;
};
