/**
 * Re-write related store
 * @param {Array.<Object>} taskbarData 
 */
export const updateTaskbar = (taskbarData) => {
    return {
        type: 'TASKBAR:UPDATE_ALL',
        payload: taskbarData
    }
}

/**
 * Re-write related store
 * @param {Array.<Object>} tasks 
 */
export const updateTasksAll = (tasks) => {
    return {
        type: 'TASKS:UPDATE_ALL',
        payload: tasks
    }
}

/**
 * Re-write related store
 * @param {Array.<Object>} filters 
 */
export const updateFilters = (filters) => {
    return {
        type: 'FILTERS:UPDATE',
        paylaod: filters
    }
}