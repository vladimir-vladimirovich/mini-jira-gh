import { createSelector } from 'reselect';

const getTasksMemo = (state, props) => state.tasks.filter((task) => task.status === props.status);
const getActiveFilterMemo = (state) => state.filters.find((filter) => filter.active);
const getSearchQueryMemo = (state) => state.searchQuery.toLowerCase();

export const getTasks = createSelector(
    [
        getTasksMemo,
        getActiveFilterMemo,
        getSearchQueryMemo
    ],
    (tasks, activeFilter, searchQuery) => {
        if (activeFilter?.assignee) {
            tasks = tasks.filter((task) => task.assignee === activeFilter.assignee);
        }

        if (activeFilter?.project) {
            tasks = tasks.filter((task) => task.project === activeFilter.project);
        }

        if (searchQuery) {
            tasks = tasks.filter((task) => task.summary.toLowerCase().includes(searchQuery)
                || task.assignee.toLowerCase().includes(searchQuery)
                || task.project.toLowerCase().includes(searchQuery)
                || task.status.toLowerCase().includes(searchQuery));
        }

        return tasks;
    }
);