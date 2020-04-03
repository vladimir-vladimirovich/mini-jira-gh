import React from 'react';
import { TasksContext } from './contexts/TasksContext';
import TaskbarContainer from './components/Taskbar/index';
import './css/Board.css';

const Board = () => {
    return (
        <TasksContext.Consumer>
            {(context) => (
                <div className="board">
                    <div className="board-taskbar-container">
                        {context.taskbar.map((item) => {
                            return (
                                <TaskbarContainer
                                    key={item.columnStatus}
                                    status={item.columnStatus}
                                />
                            )
                        })}
                    </div>
                </div>
            )}
        </TasksContext.Consumer>
    )
}

export default Board;