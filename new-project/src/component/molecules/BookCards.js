import React from 'react'


const BookCards = props => { // It is an object which stores the value of attributes
    console.log(props)  //To specify props we use them as attributes in component

   
    return (
        <body>

<center>
<div>


  <h3>Beyond Entreprenuership</h3>
  <h3 class="price">Jim collins & Bill lazier</h3>
  <h5 class="price1">13-minute read</h5>
  
  
  <footer>
  <p>Author: Hege Refsnes
  <a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>

</div>
</center>

</body>
    )
}

export default BookCards