
/**
 * @param {String} filterId
 */
export const setActiveFilter = (filterId) => {
    return {
        type: 'FILTERS:SET_ACTIVE',
        payload: filterId
    };
};