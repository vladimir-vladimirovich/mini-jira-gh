import React, { useState } from 'react';
import { Taskbar } from './Taskbar';
import { TasksContext } from '../contexts/TasksContext';
import '../components-styles/Board.css';

import { fakeServerUtil } from '../utils/fakeServer.util';

export const Board = () => {
    const [tasks, setTasks] = useState([]);
    const [taskbarData, setTaskbarData] = useState([]);

    // Async tasks fetch 
    const getTasks = async () => {
        const newTasks = await fakeServerUtil.getTasksData();
        setTasks(newTasks);
    };
    getTasks();

    // Async columns fetch 
    const getTaskbarData = async () => {
        const newTaskbarData = await fakeServerUtil.getTaskbarConfig();
        setTaskbarData(newTaskbarData);
    }
    getTaskbarData();

    return (
        <div className="board">
            <div className="board-taskbar-container">
                <TasksContext.Provider value={{ tasks, setTasks }}>
                    {taskbarData.map((item) => {
                        return (
                            <Taskbar
                                key={item.columnStatus}
                                status={item.columnStatus}
                            />
                        )
                    })}
                </TasksContext.Provider>
            </div>
        </div>
    );
}