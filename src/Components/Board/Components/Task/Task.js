import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Task.css';

const Task = (props) => {
    return (
        <div
            className="task"
            draggable="true"
            onDragStart={props.onDragStart}
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
    id: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    img: PropTypes.string,
    onDragStart: PropTypes.func.isRequired
}

export default Task;