const taskbarReducer = (taskbar = [], action) => {
    switch (action.type) {
        case 'UPDATE_TASKBAR':
            return action.payload
        default:
            return taskbar
    }
}

export default taskbarReducer;
