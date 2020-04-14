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