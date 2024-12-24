import { useState } from 'react' //Hook comes from here 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]= useState(0)// this will eliminate the <SelectElement /><getElement /><querySelectorALL /> of JS and in select all the counter 
  // variable [ variable_name, new_value_of_variable] = present_state_of_the_variable
  //let counter  =10 

  const addValue=()=>{
    //counter ++
    console.log(" value added",counter)
    setCounter(counter+1)
  }
  const removeValue=()=>{
    //counter==counter--
    console.log("remove Value",counter)
    if(counter<=0){setCounter(0)}
    else {setCounter(counter-1)}
    
  }
  return (
  <>
  <h1> Ikrama & React</h1>
  <h2>count value : {counter}</h2>

  <button 
  onClick={addValue}> add value</button>
  <br />
  <button
  onClick={removeValue}> remove values</button>
  </>
    
  )
}

export default App
