import React from 'react'
import { useState } from 'react'

const Content = () => {

   

    /* function AddFunction(){
        setCount(count+1)  // if we use the setcount again again it will show error
        // in this count = 100
    }

    function lessFunction(){  //but if we use setcount in a function it will run
        setCount((count) => {return count - 1})
        setCount((count) => {return count - 1})
        setCount((count) => {return count - 1})
        setCount((count) => {return count - 1})
        setCount((count) => {return count - 1})
        // in this count = 99 - 5 = 94 
    } */

    const [name, setname] = useState("Study");

    function SubFunction(){
        const array = ["Earn", "Grow", "Study"]
        const randomText = Math.floor(Math.random()*3)
        setname (array[randomText])
    }

  return (
    <div>
      <p>Lets {name} React</p>
      

      <button onClick={() =>SubFunction()}>Subscribe</button>
    </div>
  )
}

export default Content
