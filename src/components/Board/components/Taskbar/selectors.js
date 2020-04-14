import { createSelector } from 'reselect';

const getTasksByStatusMemo = (state, props) => {
    return state.tasksReducer.filter(task => task.status === props.status);
}

export const getTasksByStatus = createSelector(
    [getTasksByStatusMemo],
    (tasks) => tasks
);