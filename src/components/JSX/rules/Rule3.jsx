import React, { Fragment } from "react"

let Rule3 = ()=>{
    return (
        <div>
            <h4 style={{backgroundColor : "yellow", fontSize: "30px"}}>Rule 3</h4>
            <p>we should use Fragments or react.fragment to avoid nodes.</p>
            <>
            <p>para1</p>
            <p>para2</p>
            </>

            <React.Fragment>
            <p>para1</p>
            <p>para2</p>
            </React.Fragment>

            <Fragment>
            <p>para1</p>
            <p>para2</p>
            </Fragment>
        </div>
    )
}


export default Rule3