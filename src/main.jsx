import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Components/Home.jsx'
import MyTask from './Components/MyTask.jsx'
import UpdateTask from './Components/UpdateTask.jsx'

const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:[
      {
        index:true,element:<Home/>
      },
      {
     path:"/myTask",element:<MyTask/>
      },
      {
      path:"/updateTask/:id/:title/:description",element:<UpdateTask/>
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
