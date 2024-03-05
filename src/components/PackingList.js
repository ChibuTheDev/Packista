import { useState } from 'react';



export default function PackingList({items, onDeleteItem, onToggleItem, onClearList}){

    const [sortBy,setSortBy] = useState('input');
    
    let sortedItems;
    
    if (sortBy==='input') sortedItems=items
    if(sortBy==='description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))
    if (sortBy==='sorted') sortedItems = items.slice().sort((a,b) => Number(a.packed)-Number(b.packed))
      return (
       <div className='list'>
       <ul>
      {sortedItems.map((item) => <Item onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} item={item} key={item.id}/>)}
      </ul> 
                                                                                                                                
        <div className='actions'>
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value='input'>Sort by Input </option>
            <option  value='description'>Sort by Description</option>
            <option  value='sorted'>Sort by Packed status</option>
          </select>
          <button onClick={()=>onClearList()}>Clear List</button>
        </div>
      </div>
      )
    }


    function Item({ item, onDeleteItem, onToggleItem }) {
        return (
          <li>
            <input
              type='checkbox'
              value={item.packed}
              onChange={() => onToggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
              {item.count}
              {item.quantity}
              {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>  ❌  </button>
      
          </li>
        );
      }
      