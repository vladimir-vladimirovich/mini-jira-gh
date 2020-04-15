/**
 * Update whole store
 * @param {Array.<Object>} taskbarData 
 */
export const updateTaskbar = (taskbarData) => {
    return {
        type: 'TASKBAR:UPDATE_ALL',
        payload: taskbarData
    }
}

/**
 * Update whole store
 * @param {Array.<Object>} tasks 
 */
export const updateTasksAll = (tasks) => {
    return {
        type: 'TASKS:UPDATE_ALL',
        payload: tasks
    }
}