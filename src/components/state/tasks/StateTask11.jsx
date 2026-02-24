// 7️⃣ Password Show/Hide
// Input type password
// Button 👁
// Toggle between text & password



import React, { useState } from "react";

function StateTask11() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleToggle() {
    setShowPassword(!showPassword);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={handleToggle}>
        {showPassword ? "Hide 👁" : "Show 👁"}
      </button>

    </div>
  );
}

export default StateTask11;