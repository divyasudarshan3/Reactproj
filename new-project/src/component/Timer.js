import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {  // useEffect runs after every render
    setTimeout(() => {     //setTimeout() method calls a function after a number of milliseconds
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer