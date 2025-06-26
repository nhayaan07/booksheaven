import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import BookList from './Components/BookList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
<Nav />
<BookList />
    </>
  )
}

export default App
