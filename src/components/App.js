 import { useState } from 'react';
 import Logo from './Logo'
 import Form from './Form';
 import PackingList from './PackingList';
 import Stats from './Stats';
 
 import './index.css';

export default function App() {
  const [items, setItems] = useState([])
  function addItems(item) {
    setItems((items)=>[...items,item])
  }
 function handleDeleteItem(id){
  setItems((items) => items.filter(item=> item.id !== id))
 }

function handleToggleItem(id){
 setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item
  )
 )
}

function handleClearList(){
  const confirmed = window.confirm('You sure say you wan clear this list')

       if (confirmed) setItems([])
}
  return (
    <div className='app'>
    <Logo/>
    <Form onAddItems={addItems}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items}/>
    </div>
  );
}






















