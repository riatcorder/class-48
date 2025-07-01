import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import About from './components/pages/About'
import Features from './components/pages/Features'
import Pricing from './components/pages/Pricing'
import Faq from './components/pages/Faq'
import Blog from './components/pages/Blog'
let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/features' element={<Features/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path='/faq' element={<Faq/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
  </Route>
))
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
