/**
 * @param {Object} taskData
 */
export const setTaskData = (taskData) => {
    return {
        type: 'SIDEBAR:SET_TASK_DATA',
        payload: taskData
    };
};

/**
 * @param {Boolean} loading
 */
export const setLoading = (loading) => {
    return {
        type: 'SIDEBAR:SET_LOADING',
        payload: loading
    };
};