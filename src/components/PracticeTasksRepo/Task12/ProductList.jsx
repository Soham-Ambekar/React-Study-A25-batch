import React, { useState, useMemo } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {

    const [search, setSearch] = useState("");

    const products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor"];

    const filteredProducts = useMemo(() => {
        console.log("Filtering...");
        return products.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div>
            <h2>Product List</h2>

           
            <input
                type="text"
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredProducts.map((item, index) => (
                <ProductItem key={index} product={item} />
            ))}
        </div>
    );
};

export default ProductList;