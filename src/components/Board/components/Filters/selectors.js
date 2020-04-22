import * as reduxUtil from '../../../../utils/redux.util';
import { createSelector } from 'reselect';

const getFiltersMemo = (state) => state.filtersReducer;
const getTasksMemo = (state) => state.tasksReducer;

export const getTasks = createSelector(
    [getTasksMemo],
    (tasks) => tasks
);

export const getFilters = reduxUtil.createDeepEqualSelector(
    [getFiltersMemo],
    (filters) => filters
);