import * as reduxUtil from '../../utils/redux.util';

// const getColumnNamesMemo = (state) => state.taskbarReducer.taskbar;
const getColumnNamesMemo = (state) => state.taskbar;

export const getColumnNames = reduxUtil.createDeepEqualSelector(
    [getColumnNamesMemo],
    (taskbar) => taskbar.map(
        (taskbarItem) => taskbarItem.columnName
    )
);