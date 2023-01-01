
import "./task-item.style.scss"

export const TaskItem = ({task}) => {
    const {description,completed} = task;
    console.log(description,completed);
    const status = completed?"finished":"pending";
    // console.log(task.task)
    const taskCompleted = () => {
        
    }
    return (
        
        <div className="task-item-container">
                <h2>{description}</h2>
                <span>{status}</span>
                <button>complete</button>
        </div>
    )
}