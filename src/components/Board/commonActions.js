/**
 * @param {Object} properties
 */
export const setSidebarVisibility = (isVisible) => {
    return {
        type: 'SIDEBAR:SET_VISIBILITY',
        payload: isVisible
    };
};