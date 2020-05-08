/**
 * Re-write related store
 * @param {Array.<Object>} taskbarData
 */
export const updateTaskbar = (taskbarData) => {
    return {
        type: 'TASKBAR:UPDATE_ALL',
        payload: taskbarData
    };
};

/**
 * Re-write related store
 * @param {Array.<Object>} tasks
 */
export const updateTasksAll = (tasks) => {
    return {
        type: 'TASKS:UPDATE_ALL',
        payload: tasks
    };
};

/**
 * @param {Object} tasksConfig
 */
export const updateTasksConfig = (tasksConfig) => {
    return {
        type: 'TASKS:CONFIG:UPDATE',
        payload: tasksConfig
    };
};

/**
 * Re-write related store
 * @param {Array.<Object>} filters
 */
export const updateFilters = (filters) => {
    return {
        type: 'FILTERS:SET',
        payload: filters
    };
};

/**
 * @param {Array} employees
 */
export const updateEmployees = (employees) => {
    return {
        type: 'GLOBAL:UPDATE_EMPLOYEES',
        payload: employees
    };
};