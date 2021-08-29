import PropTypes from 'prop-types'
import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    deleteTask: PropTypes.func,
    onToggle: PropTypes.func,
}

export default Tasks
