import React from 'react';
import { TasksContext } from './Contexts/TasksContext';
import Taskbar from './Components/Taskbar';
import './css/Board.css';

const Board = () => {
    return (
        <TasksContext.Consumer>
            {(context) => (
                <div className="board">
                    <div className="board-taskbar-container">
                        {context.taskbar.map((item) => {
                            return (
                                <Taskbar
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