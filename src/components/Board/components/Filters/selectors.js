import * as reduxUtil from '../../../../utils/redux.util';

const getFiltersMemo = (state) => state.filtersReducer.filters;

export const getFilters = reduxUtil.createDeepEqualSelector(
    [getFiltersMemo],
    (filters) => filters
);