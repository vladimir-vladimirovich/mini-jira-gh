const tasksReducer = (tasks = [], action) => {
    switch (action.type) {
        case 'UPDATE_TASKS':
            return action.payload
        default:
            return tasks
    }
}

export default tasksReducer;