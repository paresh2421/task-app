import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard, HomeLayout, Login, Register } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children:[
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;