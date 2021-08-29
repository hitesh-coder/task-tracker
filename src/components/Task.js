import PropTypes from 'prop-types'

const Task = ({task,onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} 
            <span className='material-icons' style={{color:'red', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => onDelete(task.id)} >close</span></h3>
            <p>{task.date}</p>
            <h2>{task.reminder}</h2>
        </div>
    )
}

Task.propTypes = {
    tasks: PropTypes.object,
    deleteTask: PropTypes.func
}

export default Task
