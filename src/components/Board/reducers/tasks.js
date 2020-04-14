const tasksReducer = (tasks = [], action) => {
    switch (action.type) {
        case 'TASKS:UPDATE_ALL':
            return action.payload
        case 'TASKS:UPDATE_ITEM': {
            const newTasks = [...tasks];
            const index = newTasks.findIndex((task) => task.id === action.payload.id);
            
            newTasks[index] = {
                ...newTasks[index],
                ...action.payload
            }
            return newTasks;
        }
        default:
            return tasks
    }
}

export default tasksReducer;