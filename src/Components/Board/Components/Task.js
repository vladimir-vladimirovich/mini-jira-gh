import React from 'react';
import '../css/Task.css';

const Task = (props) => {
    const onDragStart = (event, id) => {
        event.dataTransfer.setData('taskId', id);
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

export default Task;