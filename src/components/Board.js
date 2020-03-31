import React, { useState } from 'react';
import { Taskbar } from './Taskbar';
import { TasksContext } from '../contexts/TasksContext';
import '../components-styles/Board.css';
import { tasksData } from '../data/tasksData';

export const Board = () => {
    const [tasks, setTasks] = useState(tasksData);

    return (
        <div className="board">
            <div className="board-taskbar-container">
                <TasksContext.Provider value={{ tasks, setTasks }}>
                    <Taskbar status="To Do" />
                    <Taskbar status="In Progress" />
                    <Taskbar status="Ready for testing" />
                    <Taskbar status="Completed" />
                </TasksContext.Provider>
            </div>
        </div>
    );
}