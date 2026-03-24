// useMemo Tasks
// Task 14 – Expensive Calculation
// Create a function that calculates total order price from a large list.
// Input
// products = [
//  {price:1000},
//  {price:2000},
//  {price:3000}
// ]
// Total = 6000
// Use useMemo so the calculation runs only when products change.

import React, { useState, useMemo } from "react";


    const products = [
        { price: 1000 },
        { price: 2000 },
        { price: 3000 }
    ];
    
const Task14 = () => {
    

    const [count, setCount] = useState(0); 

    const total = useMemo(() => {
        console.log("Calculating total...");

        return products.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

    }, [products]); 

    return (
        <div>
            <h2>Total Price: {total}</h2>

    
            <button onClick={() => setCount(count + 1)}>
                Re-render ({count})
            </button>
        </div>
    );
};

export default Task14;
