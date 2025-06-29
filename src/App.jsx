import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import BookList from './Components/BookList'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
<Route path="/" element={<Layout />}>
        <Route index element={<BookList />} />
       </Route>
    </Routes>
  )
}

export default App
