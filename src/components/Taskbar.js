import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import Task from './Task';
import '../components-styles/Taskbar.css';

export const Taskbar = (props) => {
    const { tasks, setTasks } = useContext(TasksContext);

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event, status) => {
        const id = event.dataTransfer.getData('taskId');
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.status = status;
                return task
            } else return task
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="taskbar">
            <div className="taskbar-title">
                <p>{props.status}</p>
            </div>
            <div
                className="taskbar-list"
                onDragOver={onDragOver}
                onDrop={(event) => onDrop(event, props.status)}
            >
                {tasks.map((task) => {
                    if (task.status === props.status) {
                        return (
                            <Task
                                key={task.id}
                                id={task.id}
                                summary={task.summary}
                                assignee={task.assignee}
                                status={task.status}
                                project={task.project}
                                img={task.img}
                            />
                        )
                    }
                })}
            </div>
        </div>
    );
}