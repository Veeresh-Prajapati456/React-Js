import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)   //useState is used to updating the user interface (useState hook is responsible to change the State)
                                              // setCounter is responsible to update the counter
  // const addValue = () => { 
  //   setCounter(counter + 1)
  // }

  // const removeValue = () => {
  //   setCounter(counter -1)
  // }
  
    const addValue = () => {
      setCounter(prevCounter => {
        if (prevCounter < 20) {
          return prevCounter + 1;
        } else {
          return prevCounter; // Stay at 20 if already at or above
        }
      });
    };
  
    const removeValue = () => {
      setCounter(prevCounter => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        } else {
          return prevCounter; // Stay at 0 if already at or below
        }
      });
    };

  return (
    <>
      <h1>Veeresh Kumar Prajapati</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick ={addValue}>Add Value</button>
      <br /> <br />
      <button onClick ={removeValue}>Remove Value</button>
    </>
  )

  //********************************************************************

  // let [counter, setCounter] = useState(10)

  // // let counter = 10

  // const addValue = () => {
  //   // console.log("clicked", counter);  
  //   // counter = counter + 1
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
    
  // }

  // const removeValue = () => {
  //   // counter = counter - 1
  //   setCounter(counter -1)
  // }

  // return (
  //   <>
  //     <h1>Veeresh Kumar Prajapati</h1>
  //     <h2>Counter value: {counter}</h2>

  //     <button onClick ={addValue}>Add Value {counter}</button>
  //     <br /> <br />
  //     <button onClick ={removeValue}>Remove Value {counter}</button>
  //     <p>footer: {counter}</p>
  //   </>
  // )



}

export default App
