import React from 'react'
import Book from './component/Book'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {
  const data=[{
    image: "https://cdn2.penguin.com.au/covers/original/9780241412725.jpg",
    title: "Physics",
    price: "₹ 500/-"
  },
  {
    image: "https://cdn2.penguin.com.au/covers/original/9780241206577.jpg",
    title: "Chemistry",
    price: "₹ 450/-"
  },
  {
    image: "https://c8.alamy.com/comp/2R24T4B/math-textbook-with-formulas-on-school-blackboard-vector-mathematics-science-education-open-book-with-orange-cover-on-background-of-chalkboard-with-math-formulas-geometric-shapes-algebra-equations-2R24T4B.jpg",
    title: "Maths",
    price: "₹ 500/-"
  }
  ]

  return (
    <div>
    <Header/>
    <div className='mainbody'>
    {data.map((book, index)=>{
      return <Book book={book} key={index}/>
    })}
    </div>
    <Footer/>
    </div>
  )
}

export default App
