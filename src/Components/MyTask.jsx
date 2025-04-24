import "../App.css"
import { useContext } from "react"
import { TaskContext } from "../Store/TaskStore"
import {useNavigate } from "react-router-dom"

const MyTask = ({data}) => {

    const {DeleteTask} = useContext(TaskContext)
  
    const navigate = useNavigate()

    const deleteTask = (e) => {
 e.preventDefault()

 DeleteTask(data.id)

    }

    const update = () =>{
  navigate(`/updateTask/${data.id}/${data.title}/${data.description}`)
    }
    return(
        <>
    <div className="task-card">
  <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="task-buttons">
            <button className="update" onClick={update}>Update</button>
            <button className="delete" onClick={deleteTask}>Delete</button>
        </div>
    </div>



    

    
   

   


        </>
    )
}

export default MyTask