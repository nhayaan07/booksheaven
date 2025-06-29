import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import BookList from './Components/BookList'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
<Nav />
<BookList />
<Footer />
    </>
  )
}

export default App
