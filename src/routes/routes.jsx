import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Homepage/HomePage.jsx'
import MainLayout from '../layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
])

export default router
