import { createSelector } from 'reselect';

const getTasksMemo = (state, props) => state.tasks.filter((task) => task.status === props.status);
const getActiveFilterMemo = (state) => state.filters.find((filter) => filter.active);

export const getTasks = createSelector(
    [getTasksMemo, getActiveFilterMemo],
    (tasks, activeFilter) => {
        if (activeFilter) {
            if (activeFilter.assignee) {
                tasks = tasks.filter((task) => task.assignee === activeFilter.assignee);
            }
            if (activeFilter.project) {
                tasks = tasks.filter((task) => task.project === activeFilter.project);
            }
        }

        return tasks;
    }
);