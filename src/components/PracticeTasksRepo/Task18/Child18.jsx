import React from "react";


const Child18 = React.memo(({ onSearch }) => {
    console.log("Child Rendered");

    return (
        <input
            type="text"
            placeholder="Search product..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
});

export default Child18;