import React , { Component } from "react"



class Message extends Component {

    constructor(){   //create a state object
        super()     //make a call in base class constructor 
        this.state  ={
            message:'Welcome visitor'
        }                
    }
 
changeMessage(){
    this.setState({  //used accept the new state of component
        message:'Welcome Divya'
    })
}
    render() {   //view to be rendered to the browser window
        return (
            <div>   
        <h1> 
            {this.state.message}
             </h1>
             <button onClick={() => this.changeMessage()} >click me</button>
             </div>

        )   
    }
}

export default Message