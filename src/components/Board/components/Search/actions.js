/**
 * Update single object item in array
 * @param {Object} properties
 */
export const setSearchQuery = (query) => {
    return {
        type: 'SEARCH:SET_QUERY',
        payload: query
    };
};