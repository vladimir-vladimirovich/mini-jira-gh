export const getColumnNames = (state) => state.taskbarReducer.map(
    (taskbarItem) => taskbarItem.columnName
);