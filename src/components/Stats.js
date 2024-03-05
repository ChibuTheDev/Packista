

export default function Stats({items}){
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length
    const percentage = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
    let percentTrue = true
    percentage===100 ? percentTrue=true : percentTrue=false;
    
    
    
    return(
      <footer className='stats'>
      <em>
        {!percentTrue ===true?<>💼You have {numItems} items on your list and you have already packed {numPacked} ({`${percentage}%`})</>:<>You sef no small</>}  
      </em>
      </footer>
    )
    }
     
    
    