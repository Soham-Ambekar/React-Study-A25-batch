import { Component } from "react";


export default  class T1 extends Component{

    constructor(){
        super()
        this.state = {
            cartitem :0,
            amount: 0
        }
    }
    render(){
        return(
            <div>
                <h1>Cart items : {this.state.cartitem} ({this.state.amount}) </h1>
                <button onClick={()=>{ 
                    this.setState({...this.state, cartitem: this.state.cartitem + 1, amount: this.state.amount + Math.floor(Math.random()*100)})
                  }}> Add to cart </button>
            </div>
        )
    }

}