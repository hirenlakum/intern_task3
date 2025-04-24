import "../App.css"
import MyTask from "./MyTask"
import { useContext } from "react"
import { TaskContext } from "../Store/TaskStore"
import AddTask from "./AddTask"
import NoTask from "./NoTask"

const Home = () => {

    const {myTask} = useContext(TaskContext)
 
    const myToDoTask= JSON.parse(localStorage.getItem("ToDoTask"))

  
    return(
        <>
    <div className="todo-container">

    <h1>📝 My To-Do List</h1>

 


    {
        myToDoTask.length===0 ? 
        <NoTask/>

        :

        
        myToDoTask.map((value)=><MyTask key={value.id} data={value}/>)
        
    }

    <AddTask/>
    
    </div>
        </>
    )
}

export default Home