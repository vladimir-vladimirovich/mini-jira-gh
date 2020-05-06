import * as reduxUtil from '../../../../utils/redux.util';

const getSidebarStatusMemo = (state) => state.sidebar.visible;
const getSidebarTaskIdMemo = (state) => state.sidebar.taskId;
const getSidebarTaskDataMemo = (state) => state.sidebar.taskData;
const getSidebarLoadingMemo = (state) => state.sidebar.loading;

export const getSidebarStatus = reduxUtil.createDeepEqualSelector(
    [getSidebarStatusMemo],
    (isOpened) => isOpened
);

export const getSidebarTask = reduxUtil.createDeepEqualSelector(
    [getSidebarTaskIdMemo],
    (taskId) => taskId
);

export const getSidebarTaskData = reduxUtil.createDeepEqualSelector(
    [getSidebarTaskDataMemo],
    (taskData) => taskData
);

export const getSidebarLoading = reduxUtil.createDeepEqualSelector(
    [getSidebarLoadingMemo],
    (loading) => loading
);