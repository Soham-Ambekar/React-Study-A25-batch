import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosTask1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        setData(res.data.quotes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((ele) => (
        <div key={ele.id}>
          <h3>{ele.quote}</h3>
          <p>- {ele.author}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosTask1;