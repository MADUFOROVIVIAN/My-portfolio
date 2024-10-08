import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
const Router = () => {
  return useRoutes(
   [
    { path: '/', 
    element: <Home/> },

    { path: '/about',
     element: <About/> },

    { path: '/contact', 
    element: <Contact/> },

    { path: '/projects', 
    element: <Projects/> },
   ] 
  )
}

export default Router