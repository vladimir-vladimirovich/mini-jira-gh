import { createSelector } from 'reselect';

const getTasksMemo = (state, props) => {
    return state.tasksReducer.filter(task => task.status === props.status);
}

export const getTasks = createSelector(
    [getTasksMemo],
    (tasks) => tasks
);