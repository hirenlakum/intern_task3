import { useState,useContext } from "react"
import { TaskContext } from "../Store/TaskStore"



const AddTask = () => {

    const {AddTask} = useContext(TaskContext)

    // const [id,setId] = useState("")
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")



const addTask = (e) => {
 e.preventDefault()
if(title,description){
    AddTask(title,description)
    // setId("")
    setTitle("")
    setDescription("")
 }
 else{
    alert('Please Provide All Value For The Field')
 }
}
    return(
        <>
        <form className="add-task-form">
        {/* <input type="text" value={id} placeholder="id" onChange={(e)=>setId(e.target.value)} /> */}
        <input type="text" value={title} placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button onClick={addTask}>Add Task</button>
    </form>
        </>
    )
}

export default AddTask