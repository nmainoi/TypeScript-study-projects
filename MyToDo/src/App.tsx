import { useState,useEffect } from 'react'
import {TaskItem} from './Component/TaskItem'
import './App.css'



function App() {
  let NewTaskDescription:string = '';
    const [TaskList, UpdateTaskList] = useState<any[]>([])
    const AddItem = (x:string) => {
      if(x !== '' ){
        UpdateTaskList([<TaskItem data={x}/>, TaskList])
      }
     }  


    // useEffect(() => {
    //     UpdateTaskList([<TaskItem data='Tarefa Inicial' visible={true}/>],)

    // }, [])


  return (
<>
<div className='MainBox'>

    <div className="inputArea">
      <input type='text' onChange={(e) => NewTaskDescription = e.target.value}></input>
      <button onClick={(x) => AddItem(NewTaskDescription)}>TO DO</button>
    </div>

    <div className="taskArea">
      <ul>
      {TaskList}
      </ul>
    </div>

</div>


</>
  )
}

export default App
