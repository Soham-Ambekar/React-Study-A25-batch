// 4️⃣ Change Background Color
// Button
// On click → change background color of div
// Toggle between two colors

import React, { Fragment, useState } from "react";

const EventTask3 = () => {
    let [state,setState] = useState(false);



  return (
    <Fragment>
      
        <div className= {state? "dark": "" } style={{height:"100vh", width:"100vw"}}>
        <button style={{height:"30px", width:"30px", backgroundColor: state?"black":"" , border:"none",borderRadius:"10px"}}  onClick={()=>{setState(!state)}}>{state? "☀️" : "🌙"}</button>
        <p  className= {state? "dark": "" }   style={{margin:"10px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate quia fugiat vero nisi! Suscipit quam laborum asperiores esse inventore vel obcaecati vero impedit totam dignissimos natus quas tenetur porro nisi quidem veniam autem ex quo sed atque magni quaerat voluptas, placeat at? Sapiente adipisci sunt quidem magni, assumenda incidunt?</p>
        </div>
    </Fragment>
  );
};

export default EventTask3;
