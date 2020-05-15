import * as reduxUtil from '../../utils/redux.util';

const getColumnNamesMemo = (state) => state.board.taskbar;

export const getColumnNames = reduxUtil.createDeepEqualSelector(
    [getColumnNamesMemo],
    (taskbar) => taskbar.map(
        (taskbarItem) => taskbarItem.columnName
    )
);