import React from 'react'

const Greet = props => { // It is an object which stores the value of attributes
    console.log(props)  //To specify props we use them as attributes in component

   
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
           
        </div>
    )
}

export default Greet