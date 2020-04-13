import React from 'react';
import PropTypes from 'prop-types';
import TaskbarContainer from './components/Taskbar/index';
import './css/Board.css';

const Board = (props) => {
    const { columnNames } = props;
    return (
        <div className="board">
            <div className="board-taskbar-container">
                {columnNames.map((item) => {
                    return (
                        <TaskbarContainer
                            key={item}
                            status={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}

Board.propTypes = {
    columnNames: PropTypes.array.isRequired
}

export default Board;