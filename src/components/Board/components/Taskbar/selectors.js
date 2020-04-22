import { createSelector } from 'reselect';

const getTasksMemo = (state, props) => {
    const activeFilter = state.filtersReducer.find((filter) => filter.active);

    if (activeFilter) {
        let tasks = [...state.tasksReducer];

        tasks = tasks.filter((task) => task.status === props.status);
        if (activeFilter.assignee) {
            tasks = tasks.filter((task) => task.assignee === activeFilter.assignee);
        }
        if (activeFilter.project) {
            tasks = tasks.filter((task) => task.project === activeFilter.project);
        }

        return tasks;
    }

    return state.tasksReducer.filter((task) => task.status === props.status);
};

export const getTasks = createSelector(
    [getTasksMemo],
    (tasks) => tasks
);