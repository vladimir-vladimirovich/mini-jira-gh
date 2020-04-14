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

/**
 * Update single object item in array
 * @param {Object} properties 
 */
export const updateTask = (properties) => {
    return {
        type: 'TASKS:UPDATE_ITEM',
        payload: {
            ...properties
        }
    }
}