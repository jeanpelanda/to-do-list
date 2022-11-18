import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './Form.module.css'

interface FormProps {
    onCreateTask: (content: string) => void
}

export function Form({ onCreateTask }: FormProps) {

    const [newTaskText, setNewTaskText] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('This field is mandatory!');
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        onCreateTask(newTaskText);
        setNewTaskText('');
    }

    return (
        <form className={styles.form} onSubmit={handleCreateNewTask}>
            <input
                placeholder="Add a new task"
                name="task"
                value={newTaskText}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type="submit">Create <PlusCircle size={16} /></button>
        </form>
    )
}