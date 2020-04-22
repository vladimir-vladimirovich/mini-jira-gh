import * as reduxUtil from '../../utils/redux.util';

const getColumnNamesMemo = (state) => state.taskbarReducer;

export const getColumnNames = reduxUtil.createDeepEqualSelector(
    [getColumnNamesMemo],
    (columnNames) => columnNames.map(
        (taskbarItem) => taskbarItem.columnName
    )
);