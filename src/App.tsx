import "./global.css"
import styles from './App.module.css'
import logo from './assets/logo.svg';
import { Form } from "./components/Form";
import { ClipboardText } from "phosphor-react";
import { Task } from "./components/Task";
import { useState } from "react";

interface Task {
  content: string,
  isCompleted: boolean
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(content: string) {
    setTasks([...tasks, { content, isCompleted: false }]);
  }

  function toggleCheck(taskToToggle: string) {
    const updatedTaskList = tasks.map(task => {
      return task.content === taskToToggle ? { ...task, isCompleted: !task.isCompleted } : task
    })
    setTasks(updatedTaskList);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => task.content != taskToDelete);
    setTasks(taskWithoutDeleteOne);
  }

  const createdTasks = tasks.length;

  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="ToDo List" />
      </header>
      <main>
        <div className="content">
          <Form onCreateTask={createTask} />
          <div className={styles.info}>
            <div className={styles.info__data}>
              <strong>Tasks created</strong>
              <span>{createdTasks}</span>
            </div>
            <div className={styles.info__data}>
              <strong>Completed</strong>
              <span>{completedTasks}</span>
            </div>
          </div>
          {
            tasks.length
              ? tasks.map(task => {
                return <Task
                  key={task.content}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  onDeleteTask={deleteTask}
                  onToggleCheck={toggleCheck}
                />
              })
              : <div className={styles.empty}>
                <ClipboardText size={56} />
                <p>
                  <strong>You don't have tasks registered yet</strong>
                  Create tasks and organize your to-do items
                </p>
              </div>
          }
        </div>
      </main>
    </div>
  )
}

export default App
