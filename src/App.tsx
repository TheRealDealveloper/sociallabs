import { RouterProvider } from 'react-router-dom'
import {router} from './lib/routes'
import './App.css'

export default function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
