import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import {useState} from 'react';

const App = () => {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      date: '5th feb',
      reminder: true
    },
    {
      id: 2,
      text: 'lawyer Appointment',
      date: '6th feb',
      reminder: true
    },
    {
      id: 3,
      text: 'Shopping',
      date: '6th feb',
      reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}
    console.log(task)
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ('No Task To Show')}
      
    </div>
  );
}

export default App;
