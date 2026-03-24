// useCallback Tasks
// Task 17 – Stable Button Handler
// Parent component passes a function to child.
// handleAddToCart(productId)
// Ensure the function reference does not change on every render.
// Example input:
// productId = 5

import React, { useState, useCallback } from "react";
import Child17 from "./Child17";

const Parent17 = () => {

    const [count, setCount] = useState(0);

    const handleAddToCart = useCallback((productId) => {
        console.log("Product added:", productId);
    }, []);

    return (
        <div>
            <h2>useCallback Example</h2>
            <br /><br />

            <Child17 handleAddToCart={handleAddToCart} />

    <br />
            <button onClick={() => setCount(count + 1)}>
                Re-render ({count})
            </button>
        </div>
    );
};

export default Parent17;