import React from 'react';
import PropTypes from 'prop-types';
import TaskbarContainer from './components/Taskbar/index';
import './css/Board.css';
import FiltersContainer from './components/Filters/index';
import SidebarContainer from './components/Sidebar/index';

const Board = (props) => {
    const { columnNames } = props;

    return (
        <div className="board">
            <SidebarContainer />
            <FiltersContainer />
            <div className="board-taskbar-container">
                {
                    columnNames.map((columnName) => (
                        <TaskbarContainer
                            key={columnName}
                            status={columnName}
                        />))
                }
            </div>
        </div>
    );
};

Board.propTypes = {
    columnNames: PropTypes.array.isRequired
};

export default Board;