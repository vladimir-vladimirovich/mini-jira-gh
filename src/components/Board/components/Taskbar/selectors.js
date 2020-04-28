import { createSelector } from 'reselect';

const getTasksMemo = (state, props) => state.tasks.filter((task) => task.status === props.status);
const getActiveFilterMemo = (state) => state.filters.find((filter) => filter.active);
const getSearchQueryMemo = (state) => state.searchQuery;

export const getTasks = createSelector(
    [
        getTasksMemo,
        getActiveFilterMemo,
        getSearchQueryMemo
    ],
    (tasks, activeFilter, searchQuery) => {
        if (activeFilter) {
            if (activeFilter.assignee) {
                tasks = tasks.filter((task) => task.assignee === activeFilter.assignee);
            }
            if (activeFilter.project) {
                tasks = tasks.filter((task) => task.project === activeFilter.project);
            }
        }

        if (searchQuery) {
            tasks = tasks.filter((task) => {
                return task.summary.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
                || task.assignee.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
                || task.project.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
                || task.status.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0;
            });
        }

        return tasks;
    }
);