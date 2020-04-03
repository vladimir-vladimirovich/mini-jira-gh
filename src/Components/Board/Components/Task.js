import React from 'react';
import PropTypes from 'prop-types';
import '../css/Task.css';

const Task = (props) => {
    const onDragStart = (event, taskId) => {
        event.dataTransfer.setData('taskId', taskId);
    }

    return (
        <div
            className="task"
            draggable="true"
            onDragStart={(event) => onDragStart(event, props.id)}
        >
            <ul className="list">
                <li>{props.id}</li>
                <li>{props.summary}</li>
                <li>{props.assignee}</li>
                <li>
                    <div className="item-status-div">
                        <p>{props.project}</p>
                    </div>
                </li>
                <li>
                    <img
                        className="image"
                        src={props.img}
                        alt=''
                    />
                </li>
            </ul>
        </div>
    )
}

Task.propTypes = {
    id: PropTypes.string,
    summary: PropTypes.string,
    assignee: PropTypes.string,
    project: PropTypes.string,
    img: PropTypes.string
}

export default Task;