import React from 'react';
import Board from './Board';
import { TasksContext } from './Contexts/TasksContext';
import { fakeServerUtil } from '../../utils/fakeServer.util';

export default class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskbar: [],
            // [start] Reserved names by TasksContext
            tasks: [],
            updateTasks: this.updateTasks,
            // [end] Reserved names by TasksContext
            setTasks: this.setTasks
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
            <TasksContext.Provider value={this.state}>
                <Board />
            </TasksContext.Provider>
        )
    }
}