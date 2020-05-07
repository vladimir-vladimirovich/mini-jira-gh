/**
 * @param {String} taskId
 */
export const setSidebarTaskId = (taskId) => {
    return {
        type: 'SIDEBAR:SET_TASKID',
        payload: taskId
    };
};