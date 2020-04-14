const taskbarReducer = (taskbar = [], action) => {
    switch (action.type) {
        case 'TASKBAR:UPDATE_ALL':
            return action.payload
        default:
            return taskbar
    }
}

export default taskbarReducer;
