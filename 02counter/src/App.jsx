import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 10

  const addValue = () => {
    // console.log("clicked", counter);  
    // counter = counter + 1
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    // counter = counter - 1
    setCounter(counter -1)
  }

  return (
    <>
      <h1>Veeresh Kumar Prajapati</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick ={addValue}>Add Value {counter}</button>
      <br /> <br />
      <button onClick ={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
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
