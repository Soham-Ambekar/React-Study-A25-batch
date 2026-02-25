// 1️⃣ Gender Selection (Radio Button)
// 👉 Create:
// 3 radio buttons:
// Male
// Female
// Other

import React, { useState } from "react";

const StateTask15 = () => {
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Gender</h2>

      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <br />

      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>

      <br />

      <label>
        <input
          type="radio"
          value="Other"
          checked={gender === "Other"}
          onChange={handleChange}
        />
        Other
      </label>

      <h3>Selected Gender: {gender}</h3>
    </div>
  );
};

export default StateTask15;
