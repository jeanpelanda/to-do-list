import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    isCompleted: boolean,
    content: string,
    onDeleteTask: (task: string) => void;
    onToggleCheck: (task: string) => void;
}

export function Task({ isCompleted, content, onDeleteTask, onToggleCheck }: TaskProps) {

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function handleToggleCheck() {
        onToggleCheck(content);
    }

    return (
        <div className={`${styles.task} ${isCompleted ? styles.completed : ''}`}>
            <button
                className={styles.task__check}
                onClick={handleToggleCheck}
            >
                {
                    isCompleted
                        ? <span className={styles.check}>
                            <CheckCircle weight='fill' />
                        </span>
                        : <span className={styles.uncheck}>
                            <Circle />
                        </span>
                }
            </button>
            <p className={styles.task__text}>{content}</p>
            <button
                className={styles.task__delete}
                onClick={handleDeleteTask}
            >
                <Trash />
            </button>
        </div>
    )
} 