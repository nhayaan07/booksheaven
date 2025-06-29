import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import BookList from './Components/BookList'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import CategoryPage from './Components/Category/CategoryPage'
import AllCategories from './pages/AllCategories'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
<Route path="/" element={<Layout />}>
        <Route index element={<BookList />} />
        <Route path='category/:slug' element={<CategoryPage />} />
        <Route path='all-categories' element={<AllCategories />} />
       </Route>
    </Routes>
  )
}

export default App
