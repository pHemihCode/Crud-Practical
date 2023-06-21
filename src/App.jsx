import React from 'react'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/create', element: <Create />},
  {path: '/read/:id', element: <Read />},
  {path: '/update/:id', element: <Update />}
])
function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
