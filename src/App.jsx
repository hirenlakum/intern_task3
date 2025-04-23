import './App.css'
import { Outlet } from 'react-router-dom'
import TaskProvider from './Store/TaskStore'

function App() {
  

  return (
    <>
    <TaskProvider>
    <Outlet/>
    </TaskProvider>

    </>
  )
}

export default App
