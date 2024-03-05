import { useState } from 'react';



export default function Form({onAddItems}){
    const [description,setDescription] = useState('')
    const [count, setCount] = useState(1)
    function handleSubmit(e){
    e.preventDefault();
  
    const newItem = { description, count, packed: false, id: Date.now() }
      console.log(newItem);
  
     setDescription("");
     setCount(1)
     onAddItems(newItem)
    }
    return (
  
      <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your Trip</h3>
      <select onChange={(e)=>setCount(Number(e.target.value))} >
         {Array.from({length:20},(_,i)=>i+1).map((num) =><option value={num} key={num}> {num}</option>)}
  
      </select>
      <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Item...'></input>
      <button>Add</button>
      </form>
    )
  }
  