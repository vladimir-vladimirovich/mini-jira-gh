import * as reduxUtil from '../../../../utils/redux.util';

const getSidebarVisibilityMemo = (state) => state.sidebar.visible;
const getSidebarLoadingMemo = (state) => state.sidebar.loading;
const getSidebarTaskMemo = (state) => {
    return state.sidebar.taskId
        ? state.tasks.find((task) => task.id === state.sidebar.taskId)
        : state.sidebar.defaultTaskData;
};

export const getVisibilityStatus = reduxUtil.createDeepEqualSelector(
    [getSidebarVisibilityMemo],
    (isVisible) => isVisible
);

export const getSidebarLoading = reduxUtil.createDeepEqualSelector(
    [getSidebarLoadingMemo],
    (loading) => loading
);

export const getSidebarTask = reduxUtil.createDeepEqualSelector(
    [getSidebarTaskMemo],
    (task) => task
);