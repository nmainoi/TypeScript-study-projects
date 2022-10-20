interface TaskItemProps {
    task: string,
    onDelete: () => void
  }
  
  export const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
    return <li>
      <input type="checkbox" /> 
      <span>{task}</span>    
      <button onClick={onDelete}>Del</button>
    </li> 
  }
