export const updateTasks = (tasks) => {
    return {
        type: 'UPDATE_TASKS',
        payload: tasks
    }
}

export const updateTaskbar = (taskbarData) => {
    return {
        type: 'UPDATE_TASKBAR',
        payload: taskbarData
    }
}