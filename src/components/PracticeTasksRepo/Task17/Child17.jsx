import React from "react";

// React.memo to prevent unnecessary re-render
const Child17 = React.memo(({ handleAddToCart }) => {
    console.log("Child Rendered");

    return (
        <button onClick={() => handleAddToCart(5)}>
            Add Product 5 to Cart
        </button>
    );
});

export default Child17;