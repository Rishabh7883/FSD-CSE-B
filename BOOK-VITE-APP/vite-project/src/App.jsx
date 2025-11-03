import React, { useState, useEffect } from 'react';
import Book from './component/Book'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {

   const [books, setBooks] = useState([]);

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>{
    setBooks(data);
  })
},[])
  return (
    <div>
    <Header/>
    <div className='mainbody'>
      {books.map((book, index) => {  
        return <Book book={book} key={index}/>
      })}
    </div>
    <Footer/>
    </div>
  )
}

export default App
