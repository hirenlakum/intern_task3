import {createContext, useEffect} from "react"
import { useState } from "react"
export const TaskContext = createContext()
import { v4 as uuidv4 } from 'uuid';


const TaskProvider = ({children}) => {
<link href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic" rel="stylesheet" />
    const [myTask,setMyTask] = useState([])

    useEffect(()=>{
       const ToDoList= localStorage.getItem("ToDoTask")

       if(!ToDoList){
        localStorage.setItem("ToDoList",JSON.stringify([]))
       }
    },[])

    

    const AddTask = (title,description) => {

       const GetList= JSON.parse(localStorage.getItem("ToDoTask"))
       

    const localTask = [...GetList,{
    id:uuidv4(),
    title:title,
    description:description
}]

setMyTask(localTask)

localStorage.setItem("ToDoTask",JSON.stringify(localTask))
    } 

    const DeleteTask = (id) => {

const myNewRemainingTask= JSON.parse(localStorage.getItem("ToDoTask"))
const newTaskk = myNewRemainingTask.filter(value=>value.id!==id)
setMyTask(newTaskk)
localStorage.setItem("ToDoTask",JSON.stringify(newTaskk))
    }
    


    return(
        <TaskContext.Provider value={{myTask,AddTask,DeleteTask}}>
{children}
        </TaskContext.Provider>
    )
}


export default TaskProvider