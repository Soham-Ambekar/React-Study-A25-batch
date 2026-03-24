// Task 18 – Optimized Search Handler
// Create a search input.
// Search product: "lap"
// Pass the search handler to a child component using useCallback.

import React, { useState, useCallback, useMemo } from "react";
import Child18 from "./Child18";


const Parent18 = () => {

    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0); // to test re-render

    const products = useMemo(() => [
        "Laptop",
        "Phone",
        "Headphones",
        "Camera",
        "Tablet"
    ], []);

    
    const handleSearch = useCallback((value) => {
        console.log("Searching:", value);
        setSearch(value);
    }, []);

    
    const filteredProducts = useMemo(() => {
        console.log("Filtering...");
        return products.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, products]);

    return (
        <div>
            <h2>Search Products</h2>

         
            <Child18 onSearch={handleSearch} />

       
            <ul>
                {filteredProducts.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

         
            <button onClick={() => setCount(count + 1)}>
                Re-render ({count})
            </button>
        </div>
    );
};

export default Parent18;