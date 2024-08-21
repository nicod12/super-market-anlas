"use client"
import React from 'react';
import { useProductContext } from '@/context/product-context';


const StorePage: React.FC = () => {
    const { quantities, handleIncrement, handleDecrement } = useProductContext();

    return (
        <div>
            <h1>Nueva Página</h1>
            <p>Producto 1 - Cantidad seleccionada: {quantities[1] || 0}</p>

            <button onClick={() => handleIncrement(1)}>Incrementar Producto 1</button>
            <button onClick={() => handleDecrement(1)}>Decrementar Producto 1</button>
        </div>
    );
};

export default StorePage;