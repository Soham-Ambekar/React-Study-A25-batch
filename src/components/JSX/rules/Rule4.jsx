import { Fragment } from "react";

let Rule4 = ()=>{

    let age = 25;
    let arr = [1,2,3]

    
    return (
        <Fragment>
            <h3 style={{backgroundColor : "yellow", fontSize: "30px"}}>Rule 4 </h3>
            <p> age: {age} is a jsx expression do check the code for seeing the expressions buuddy. </p>
            <p>we can also wirtie the inline css using jsx expression.</p>

            {arr.map(val=>{return( <div>{val}</div> )})}


        </Fragment>
    )
}

export default Rule4;


