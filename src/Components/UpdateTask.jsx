import "../App.css"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const UpdateTask = () => {


    const navigate = useNavigate()


    const getList=localStorage.getItem("ToDoTask")
    const getListConvert = JSON.parse(getList)

    const {id} = useParams()
    const {title} = useParams()
    const {description} = useParams()

    const [myTitle,setMyTitle] = useState(title)
    const [myDescription,setMyDescription] = useState(description)

    const update = (e) => {
        e.preventDefault()
        getListConvert.map((value)=>{
            if(value.id==id){
                value.title=myTitle
                value.description=myDescription
            }
        })

        localStorage.setItem("ToDoTask",JSON.stringify(getListConvert))
        navigate("/")

    
    }

  


    return(
        <>
            <div className="todo-container">

<h1>📝 Update Task</h1>
     <form className="add-task-form">
        <input type="text" value={myTitle} placeholder="Title" onChange={(e)=>setMyTitle(e.target.value)}  />
        <textarea placeholder="Description" value={myDescription} onChange={(e)=>setMyDescription(e.target.value)} ></textarea>
        <button onClick={update}>Update Task</button>
    </form>
    </div>
        </>
    )
}

export default UpdateTask