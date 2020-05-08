/**
 * @param {Object} properties
 */
export const setSidebarVisibility = (isVisible) => {
    return {
        type: 'SIDEBAR:SET_VISIBILITY',
        payload: isVisible
    };
};

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
    };
};