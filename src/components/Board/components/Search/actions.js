/**
 * Update single object item in array
 * @param {String} query
 */
export const setSearchQuery = (query) => {
    return {
        type: 'SEARCH:SET_QUERY',
        payload: query
    };
};