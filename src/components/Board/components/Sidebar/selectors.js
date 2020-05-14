import * as reduxUtil from '../../../../utils/redux.util';

const getSidebarVisibilityMemo = (state) => state.board.sidebar.visible;
const getSidebarTaskMemo = (state) => {
    return state.board.sidebar.taskId
        ? state.board.tasks.find((task) => task.id === state.board.sidebar.taskId)
        : state.board.sidebar.defaultTaskData;
};
const getStatusesMemo = (state) => state.board.tasksConfig.statuses;
const getPrioritiesMemo = (state) => state.board.tasksConfig.priorities;
const getProjectsMemo = (state) => state.board.tasksConfig.projects;
const getEmployeesMemo = (state) => state.board.employees;

export const getVisibilityStatus = reduxUtil.createDeepEqualSelector(
    [getSidebarVisibilityMemo],
    (isVisible) => isVisible
);

export const getSidebarTask = reduxUtil.createDeepEqualSelector(
    [getSidebarTaskMemo],
    (task) => task
);

export const getStatuses = reduxUtil.createDeepEqualSelector(
    [getStatusesMemo],
    (statuses) => statuses
);

export const getPriorities = reduxUtil.createDeepEqualSelector(
    [getPrioritiesMemo],
    (priorities) => priorities
);

export const getProjects = reduxUtil.createDeepEqualSelector(
    [getProjectsMemo],
    (projects) => projects
);

export const getEmployees = reduxUtil.createDeepEqualSelector(
    [getEmployeesMemo],
    (employee) => employee
);