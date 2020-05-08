import * as reduxUtil from '../../../../utils/redux.util';

const getSidebarVisibilityMemo = (state) => state.sidebar.visible;
const getSidebarTaskMemo = (state) => {
    return state.sidebar.taskId
        ? state.tasks.find((task) => task.id === state.sidebar.taskId)
        : state.sidebar.defaultTaskData;
};
const getStatusesMemo = (state) => state.tasksConfig.statuses;
const getPrioritiesMemo = (state) => state.tasksConfig.priorities;
const getProjectsMemo = (state) => state.tasksConfig.projects;
const getEmployeesMemo = (state) => state.employees;

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