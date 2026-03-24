// Task 15 – Product Search Optimization
// Product list:
// Laptop
// Phone
// Headphones
// Camera
// Tablet
// Smartwatch
// Search input:
// "ph"
// Expected result:
// Phone
// Headphones
// Optimize search using useMemo.

import React, { useState, useMemo } from "react";

const Task15 = () => {

    const [search, setSearch] = useState("");

   
    const products = [
        "Laptop",
        "Phone",
        "Headphones",
        "Camera",
        "Tablet",
        "Smartwatch"
    ];

    // Optimized search
    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");

        return products.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );

    }, [search ]);

    return (
        <div>
            <h2>Product Search</h2>

            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filteredProducts.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Task15;