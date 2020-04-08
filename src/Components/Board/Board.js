import React from 'react';
import TaskbarContainer from './components/Taskbar/index';
import { useSelector } from 'react-redux';
import './css/Board.css';

const Board = () => {
    const taskbarData = useSelector(state => state.taskbarReducer);
    return (
        <div className="board">
            <div className="board-taskbar-container">
                {taskbarData.map((item) => {
                    return (
                        <TaskbarContainer
                            key={item.columnStatus}
                            status={item.columnStatus}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Board;