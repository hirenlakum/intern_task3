import {createContext, useEffect} from "react"
import { useState } from "react"
export const TaskContext = createContext()


const TaskProvider = ({children}) => {

    const [myTask,setMyTask] = useState([])

    useEffect(()=>{
       const ToDoList= localStorage.getItem("ToDoTask")

       if(!ToDoList){
        localStorage.setItem("ToDoList",JSON.stringify([]))
       }
    },[])

    

    const AddTask = (id,title,description) => {

       const GetList= JSON.parse(localStorage.getItem("ToDoTask"))
       

    const localTask = [...GetList,{
    id:id,
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