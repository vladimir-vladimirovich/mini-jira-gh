import * as reduxUtil from '../../../../utils/redux.util';

const getFiltersMemo = (state) => state.board.filters;

export const getFilters = reduxUtil.createDeepEqualSelector(
    [getFiltersMemo],
    (filters) => filters
);