import { createSelector } from 'reselect';

const getTasksMemo = (state) => state.tasksReducer;

export const getTasks = createSelector(
    getTasksMemo,
    (tasks) => tasks
)