import { createSelector } from 'reselect';

const getColumnNamesMemo = (state) => state.taskbarReducer;

export const getColumnNames = createSelector(
    getColumnNamesMemo,
    (columnNames) => columnNames.map(
        (taskbarItem) => taskbarItem.columnName)
)