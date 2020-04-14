import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Task.css';

const Task = (props) => {
    const { id, summary, assignee, project, img, onDragStart } = props;
    
    return (
        <div
            className="task"
            draggable="true"
            onDragStart={onDragStart}
        >
            <ul className="list">
                <li>{id}</li>
                <li>{summary}</li>
                <li>{assignee}</li>
                <li>
                    <div className="item-status-div">
                        <p>{project}</p>
                    </div>
                </li>
                <li>
                    <img
                        className="image"
                        src={img}
                        alt=''
                    />
                </li>
            </ul>
        </div>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    img: PropTypes.string,
    onDragStart: PropTypes.func.isRequired
}

export default Task;