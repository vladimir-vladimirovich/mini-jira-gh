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