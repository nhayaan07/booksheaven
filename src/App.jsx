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
import AllBooks from './Components/AllBooks'
import BlogPage from './Components/BlogPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
<Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='category/:slug' element={<CategoryPage />} />
        <Route path='all-categories' element={<AllCategories />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
       </Route>
    </Routes>
  )
}

export default App
