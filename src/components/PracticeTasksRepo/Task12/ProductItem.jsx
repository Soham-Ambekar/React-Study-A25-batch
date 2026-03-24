//! Task 12 – Product List Optimization
// Display a list of products.
// Laptop
// Phone
// Mouse
// Keyboard
// Monitor
// When a filter or search changes, only necessary components should render.
// Wrap product items using React.memo.


import React, { memo } from "react";

const ProductItem =({ product }) => {
    console.log("Rendering:", product);

    return (
        <div style={{ padding: "10px", border: "1px solid gray", margin: "5px" }}>
            {product}
        </div>
    );
};

export default memo(ProductItem);