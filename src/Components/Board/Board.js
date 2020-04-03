import React from 'react';
import { fakeServerUtil } from '../../utils/fakeServer.util';
import { TasksContext } from './Contexts/TasksContext';
import Taskbar from './Components/Taskbar';
import './css/Board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskbar: [],
            // [start] Reserved names by TasksContext
            tasks: [],
            updateTasks: this.updateTasks,
            setTasks: this.setTasks
            // [end] Reserved names by TasksContext
        }
    }

    componentDidMount() {
        this.updateTasks();
        this.updateTaskbar();
    }

    // Async tasks fetch 
    async updateTasks() {
        const newTasks = await fakeServerUtil.getTasksData();
        this.setState({ tasks: newTasks });
    }

    setTasks = (newTasks) => {
        this.setState({ tasks: newTasks });
    }

    // Async columns fetch 
    async updateTaskbar() {
        const newTaskbar = await fakeServerUtil.getTaskbarConfig();
        this.setState({ taskbar: newTaskbar });
    }

    render() {
        return (
            <div className="board">
                <div className="board-taskbar-container">
                    <TasksContext.Provider value={this.state}>
                        {this.state.taskbar.map((item) => {
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
        )
    }
}