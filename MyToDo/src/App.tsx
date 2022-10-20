import { useRef, useState  } from 'react'
import {TaskItem} from './Component/TaskItem'

function App() {
  const newTaskInputRef = useRef<HTMLInputElement>(null)
  const [taskList, setTaskList] = useState<string[]>([])

  const addItem = () => {
    const newTaskDescription = newTaskInputRef.current?.value
    if(newTaskDescription && !taskList.includes(newTaskDescription)){
      setTaskList((currList) => [newTaskDescription, ...currList])
    }
  }

  const deleteTask = (task: string) => {
    setTaskList(curr => curr.filter(x => x != task))
  }

  return (
    <>
      <div className='MainBox'>
        <div className="inputArea">
          <input type='text' ref={newTaskInputRef} />
          <button onClick={addItem}>TO DO</button>
        </div>

        <div className="taskArea">
          <ul>
          {
            taskList.map((task) => {
              return <TaskItem key={task} 
                task={task} 
                onDelete={() => deleteTask(task)} 
              />
            })
          }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App