import React, { useState} from 'react';
import '../App.css'
const Book = ({book}) => {
     const [count, setCount] = useState([]);
  
    const increment=()=>{
      alert("Add to Cart Successfully");
      return setCount(count+1);
    }
    const decrement=()=>{
      alert("removed from Cart Successfully");
      return setCount(count-1);
    }

  return (
    <div className='card'>
       <img src={book.image} width="200" height="200" alt="image" />
       <h3>Title: {book.title}</h3>
       <h4>Price: {book.price}</h4>
       <button onClick={decrement} style={{width:"20px"}}>-</button>
       <span>{count}</span>
       <button onClick={increment} style={{width:"20px"}}>+</button>
       <br />
       <button>Add To Cart</button>
    </div>
  )
}

export default Book
