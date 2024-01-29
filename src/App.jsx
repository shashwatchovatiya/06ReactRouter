import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Root from './Root'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import UserContect from './Components/UserContect'
import Github from './Components/Github'


const router =createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    children :[
      {
        path: '',
        element : <Home />,
      },
      {
        path: '/about',
        element : <About />
      },
      {
        path: '/contactus',
        element : <ContactUs />,
      },
      {
        path: 'user/:UserId',
        element : <UserContect/>,
      } ,
      {
        path: '/github',
        element : <Github/>,
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
