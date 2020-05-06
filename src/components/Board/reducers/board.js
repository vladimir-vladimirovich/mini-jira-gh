import { produce } from 'immer';

const defaultState = {
    taskbar: [],
    tasks: [],
    filters: [],
    searchQuery: '',
    sidebar: {
        visible: false,
        taskId: '',
        loading: true,
        taskData: {
            id: '',
            summary: '',
            assignee: '',
            status: '',
            project: '',
            img: '',
            desciption: ''
        }
    }
};

const boardReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKBAR:UPDATE_ALL': {
            Object.assign(draftState, {
                taskbar: action.payload
            });

            break;
        }
        case 'TASKS:UPDATE_ALL': {
            Object.assign(draftState, {
                tasks: action.payload
            });

            break;
        }
        case 'TASKS:UPDATE_ITEM': {
            const updateItem = draftState.tasks.find((task) => task.id === action.payload.id);

            Object.assign(updateItem, action.payload);

            break;
        }
        case 'FILTERS:SET': {
            action.payload.forEach((filter) => {
                filter.active = false;
            });
            Object.assign(draftState, {
                filters: action.payload
            });

            break;
        }
        case 'FILTERS:SET_ACTIVE': {
            const payLoadFilter = draftState.filters.find((filter) => filter.id === action.payload);

            draftState.filters.forEach((filter) => {
                filter.active = false;
            });
            payLoadFilter.active = true;

            break;
        }
        case 'SEARCH:SET_QUERY': {
            draftState.searchQuery = action.payload;

            break;
        }
        case 'SIDEBAR:SET_VISIBILITY': {
            draftState.sidebar.visible = action.payload;

            break;
        }
        case 'SIDEBAR:SET_TASKID': {
            draftState.sidebar.taskId = action.payload;

            break;
        }
        case 'SIDEBAR:SET_LOADING': {
            draftState.sidebar.loading = action.payload;

            break;
        }
        case 'SIDEBAR:SET_TASK_DATA': {
            draftState.sidebar.taskData = action.payload;

            break;
        }
    }
});

export default boardReducer;