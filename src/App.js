import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Product from './components/Product.js'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route>
      
    </Route>
  </Route>
))
const App = () => {
  return (
    <div className='App'>
      <Product />
    </div>
  )
}

export default App